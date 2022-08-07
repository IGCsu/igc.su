<?php

namespace App\Models;

use DivisionByZeroError;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Whoops\Exception\ErrorException;

class MemberLevel extends Model
{
    use HasFactory;

    protected $connection= 'heroku';

    protected $table = 'levels';

	protected $casts = ['id' => 'string'];

	/**
	 * ***************************************************************************
	 * Продвинутые данные
	 * ***************************************************************************
	 */

	/**
	 * Содержит объект продвинутых данных пользователя
	 * @var object
	 */
	private $data = [];

	/**
	 * Возвращает процент оверпоста
	 * @return int
	 */
	public function getOverpost(): int
	{
		if(isset($this->data['overpost'])) return $this->data['overpost'];

		try{
			return $this->data['overpost'] = round( ($this->messagesAll - $this->messagesLegit) / $this->messagesLegit * 100, 1);
		}catch(\Exception|\Throwable $e){
			return $this->data['overpost'] =  0;
		}
	}

	/**
	 * Возвращает среднее количество символов в сообщениях
	 * @return int
	 */
	public function getSymbolsAvg(): int
	{
		if(isset($this->data['symbolsAvg'])) return $this->data['symbolsAvg'];

		try{
			return $this->data['symbolsAvg'] = round($this->symbols / $this->messagesAll, 1);
		}catch(\Exception|\Throwable $e){
			return $this->data['symbolsAvg'] =  0;
		}
	}

	/**
	 * Возвращает процент активности
	 * @return int
	 */
	public function getActivityPer(): int
	{
		if(isset($this->data['activityPer'])) return $this->data['activityPer'];

		try{
			return $this->data['activityPer'] = round($this->activity / 30 * 100, 1);
		}catch(\Exception|\Throwable $e){
			return $this->data['activityPer'] =  0;
		}
	}

	/**
	 * Возвращает опыт
	 * @return int
	 */
	public function getExp(): int
	{
		if(isset($this->data['exp'])) return $this->data['exp'];

		try{
			return $this->data['exp'] = $this->messagesLegit * $this->getSymbolsAvg() / 100 * $this->getActivityPer();
		}catch(\Exception|\Throwable $e){
			return $this->data['exp'] =  0;
		}
	}

	/**
	 * Возвращает количество оштрафованного опыта пользователя
	 * @return int
	 */
	public function getExpFine(): int
	{
		if(isset($this->data['expFine'])) return $this->data['expFine'];

		try{
			return $this->data['expFine'] = round(100 / $this->getActivityPer() * $this->getExp() - $this->getExp());
		}catch(\Exception|\Throwable $e){
			return $this->data['expFine'] = 0;
		}
	}

	/**
	 * Возвращает роль пользователя
	 * @param array $roles
	 * @return object|null
	 */
	public function getRole(array $roles): ?object
	{
		if(isset($this->data['role'])) return $this->data['role'];

		$exp = $this->getExp();

		foreach($roles as $role){
			if($role->exp <= $exp) return $this->data['role'] = $role;
		}

		return null;
	}

	/**
	 * Возвращает следующую роль пользователя. Возвращает true - если следующей роли нет
	 * @param array $roles
	 * @return object|null
	 */
	public function getNextRole(array $roles): ?object
	{
		if(isset($this->data['nextRole'])) return $this->data['nextRole'];

		$role = $this->getRole($roles);

		return $this->data['nextRole'] = $roles[$role->pos - 1] ?? null;
	}

	/**
	 * Возвращает прогресс до следующей роли. Возвращает true - если следующей роли нет
	 * @param array $roles
	 * @return int
	 */
	public function getNextRoleProgress(array $roles): ?int
	{
		if(isset($this->data['nextRoleProgress'])) return $this->data['nextRoleProgress'];

		$exp = $this->getExp();
		$role = $this->getRole($roles);
		$nextRole = $this->getNextRole($roles);

		if($nextRole == null) return null;

		try{
			return $this->data['nextRoleProgress'] = round( ( ($exp - $role->value) / ($nextRole->value - $role->value) ) * 100, 1);
		}catch(\Exception|\Throwable $e){
			return $this->data['nextRoleProgress'] = 0;
		}
	}

}
