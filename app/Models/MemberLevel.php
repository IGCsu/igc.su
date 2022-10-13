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
	private $dataLevel = [];

	/**
	 * Возвращает процент оверпоста
	 * @return int
	 */
	public function getOverpost(): int
	{
		if(isset($this->dataLevel['overpost'])) return $this->dataLevel['overpost'];

		try{
			return $this->dataLevel['overpost'] = round( ($this->messagesAll - $this->messagesLegit) / $this->messagesLegit * 100, 1);
		}catch(\Exception|\Throwable $e){
			return $this->dataLevel['overpost'] =  0;
		}
	}

	/**
	 * Возвращает среднее количество символов в сообщениях
	 * @return int
	 */
	public function getSymbolsAvg(): int
	{
		if(isset($this->dataLevel['symbolsAvg'])) return $this->dataLevel['symbolsAvg'];

		try{
			return $this->dataLevel['symbolsAvg'] = round($this->symbols / $this->messagesAll, 1);
		}catch(\Exception|\Throwable $e){
			return $this->dataLevel['symbolsAvg'] =  0;
		}
	}

	/**
	 * Возвращает процент активности
	 * @return int
	 */
	public function getActivityPer(): int
	{
		if(isset($this->dataLevel['activityPer'])) return $this->dataLevel['activityPer'];

		try{
			return $this->dataLevel['activityPer'] = round($this->activity / 30 * 100, 1);
		}catch(\Exception|\Throwable $e){
			return $this->dataLevel['activityPer'] =  0;
		}
	}

	/**
	 * Возвращает опыт
	 * @return int
	 */
	public function getExp(): int
	{
		if(isset($this->dataLevel['exp'])) return $this->dataLevel['exp'];

		try{
			return $this->dataLevel['exp'] = $this->messagesLegit * $this->getSymbolsAvg() / 100 * $this->getActivityPer();
		}catch(\Exception|\Throwable $e){
			return $this->dataLevel['exp'] =  0;
		}
	}

	/**
	 * Возвращает количество оштрафованного опыта пользователя
	 * @return int
	 */
	public function getExpFine(): int
	{
		if(isset($this->dataLevel['expFine'])) return $this->dataLevel['expFine'];

		try{
			return $this->dataLevel['expFine'] = round(100 / $this->getActivityPer() * $this->getExp() - $this->getExp());
		}catch(\Exception|\Throwable $e){
			return $this->dataLevel['expFine'] = 0;
		}
	}

	/**
	 * Возвращает роль пользователя
	 * @param $roles
	 * @return object|null
	 */
	public function getRole($roles): ?object
	{
		if(isset($this->dataLevel['role'])) return $this->dataLevel['role'];

		$exp = $this->getExp();

		foreach($roles as $role){
			if($role->exp <= $exp) return $this->dataLevel['role'] = $role;
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
		if(isset($this->dataLevel['nextRole'])) return $this->dataLevel['nextRole'];

		$role = $this->getRole($roles);

		return $this->dataLevel['nextRole'] = $roles[$role->pos - 1] ?? null;
	}

	/**
	 * Возвращает прогресс до следующей роли. Возвращает true - если следующей роли нет
	 * @param array $roles
	 * @return int
	 */
	public function getNextRoleProgress(array $roles): ?int
	{
		if(isset($this->dataLevel['nextRoleProgress'])) return $this->dataLevel['nextRoleProgress'];

		$exp = $this->getExp();
		$role = $this->getRole($roles);
		$nextRole = $this->getNextRole($roles);

		if($nextRole == null) return null;

		try{
			return $this->dataLevel['nextRoleProgress'] = round( ( ($exp - $role->exp) / ($nextRole->exp - $role->exp) ) * 100, 1);
		}catch(\Exception|\Throwable $e){
			return $this->dataLevel['nextRoleProgress'] = 0;
		}
	}

}
