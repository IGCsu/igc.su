<x-app-layout>
	<x-slot name="title">Бюджет</x-slot>


	<div class="container">

		<div id="total" class="p-6 shadow rounded-md">
			<small>Текущие средства по бюджету</small>
			<span></span>
		</div>

		<table id="budget" class="p-6 shadow rounded-md"></table>

	</div>

	<style>
		#total {
			background: #36393f;
			width: fit-content;
			padding: 20px 70px;
			text-align: center;
			margin: 60px auto;
			font-weight: 600;
			font-size: 44px;
		}
		#total small {
			margin-bottom: -9px;
			font-size: 17px;
			display: block;
		}

		#budget {
			background: #36393f;
			margin: 60px 0;
			width: 100%;
		}
		#budget tr { border-bottom: 1px solid #0003; }
		#budget tr.plus { background: #28a74517; }
		#budget tr.minus { background: #dc354517; }
		#budget tr.frozen { background: #ffffff17; }
		#budget tr.plus .budget-value { color: #44cb63; }
		#budget tr.minus .budget-value { color: #fe7986; }
		#budget tr.frozen .budget-value { color: inherit; }
		#budget .budget-date {
			white-space: nowrap;
			font-size: 11px;
			padding: 0 5px;
			opacity: 0.6;
			width: 1%;
		}
		#budget .budget-name {
			white-space: pre-wrap;
			padding: 10px 5px;
		}
		#budget .budget-value {
			text-align: right;
			padding: 0 5px;
		}
		#budget .budget-total {
			padding-right: 10px;
			text-align: right;
		}
	</style>

	<script>
		let html = '';
		let total = 0;
		const budget = @json($budget);
		for(item of budget){
			let row = '<td class="budget-date">' + item.created_at.substr(0, 16) + '</td>';

			row += '<td class="budget-name">' + item.name + (item.status == 2 ? ' (не исполнено)' : '') + '</td>';

			row += '<td class="budget-value">' + (item.value > 0 ? '+' : '') + item.value + '₽</td>';

			row += item.status == 2 ? '<td class="budget-total"></td>'
				: '<td class="budget-total">=' + (total += Number(item.value)).toFixed(2) + '₽</td>';

			html = '<tr class="' + (item.value > 0 ? 'plus' : 'minus') + (item.status == 2 ? ' frozen' : '') + '">' + row + '</tr>' + html;
		}

		$('#budget').html(html);
		$('#total > span').html(total.toLocaleString('ru') + ' ₽');
	</script>
</x-app-layout>
