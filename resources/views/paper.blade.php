<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="theme-color" content="#202225">
	<meta name="msapplication-TileColor" content="#202225">
	<meta name="yandex-tableau-widget" content="logo=https://igc.su/images/IGC.png, color=#202225" />

	<title>Paper | IGC</title>
	<link rel="icon" sizes="128x128" type="image/png" href="/images/favicon128.png">

	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

	<!-- Styles -->
	<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	<link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/app.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/custom-scrollbar.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/font-icons.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/style.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/animate.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/fonts/TTMarxiana/style.css') }}" rel="stylesheet">

	<!-- Scripts -->
	<script src="{{ mix('js/app.js') }}" defer></script>
	<script src="{{ asset('/js/jquery.js') }}"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</head>
<body class="font-sans antialiased">
	<x-jet-banner />

	<div class="min-h-screen">
		<main>

			<div id="head" class="row">

				<div class="col-3"></div>
				<div id="name" class="col-6">Почти Правда!</div>
				<div class="col-3"></div>

			</div>

			<div id="subhead" class="row">

				<div id="author" class="col-2">Россия</div>
				<div id="slogan" class="col-8">76% правды, 15% неприкрытой лжи и 9% непроверенной информации</div>
				<div id="date" class="col-2">Весна 2031</div>

			</div>

			<article id="text">

				<h2>Укрепление и уверенное наступление на континенте</h2>

				<p>ВИКА захватывает новые территории на континенте и укрепляется на фронте. За 2 года Финляндия прекратила тщетные попытки Чехии захватить Варшаву и перешла в контрнаступление и подобралась к Кракову.</p>
				<p>Ситуация в море не однозначная: у АФ не малую часть военных сил составляет флот. Англия и Ирландия уже потеряны.</p>

				<h3>Поговорим об Украине</h3>

				<p>После подписания мира, Украина поклялась соблюсти нейтралитет между ВИКА и АФ. Однако даже не закончив передачу территорий по мирному соглашению, украинская дивизия поддержала атаку Чехии на Фина. А так же объявила о передачи земель западнее Винницы в распоряжении АФ.</p>
				<p>После этого, Украина стала готовиться к войне с Грузией. Румыния навязала Украине сделку, по которой Украина должна была захватить Стамбул. Украинский флот наивно атаковал Стамбул, а Румыния не поддержала атаку в самый нужный момент. Атака украинского флота завершилась провалом, но более того, неудачная атака саботировала перевод российского флота, что поставило под угрозу компанию в Эгейском море.</p>
				<p>Украина неожиданно простила явный умышленный обман Румынии. После чего Румыния вторглась в Молдавию, которая на тот момент была под контролем Украины. Украина на это никак не отреагировала и отвергала все предложения помощи со стороны России.</p>

				<br><br>

				<p>Был сделан вывод о том, что Украина намерено действует в интересах АФ против России. Украина нарушила обещания о нейтралитете. В тот же год Россия объявила войну Украине. Грузия присоединилась к Восточно-Имперскому Континентальному Альянсу (ВИКА) и вступила в войну против Украины.</p>
				<p>Российский президент прокомментировал это словами: "Стоило додушить эту змею сразу!"</p>
				<p>Эксперты полагают, что военная компания против Украины не продлиться более двух лет: Украина уже потеряла контроль над Чёрным морем, а Российские войска уже вошли в Запорожье и взяли под контроль Днепр.</p>
				<p>Украиной был сформирован союз с Турцией. Союз получил название "Черноморские Силы". Президент России отметил, что название тупейшее.</p>

				<img src="/images/paper6.png">
				<div style="border: 2px solid #000;">
					<div style="padding: 0 3px; background: #df9d9d;color: #500008;">АФ: 59 → 62 точки</div>
					<div style="padding: 0 3px; background: #8cc193;color: #073211;">ВИКА: 31 → 40 точек</div>
					<div style="padding: 0 3px; background: #7eafe3;color: #111827;">Франц. союз: 16 → 6 точек</div>
					<div style="padding: 0 3px; background: #fff8bc;color: #524a05;">ЧС: 6 точек</div>
				</div>

			</article>

			<style>
				body { padding: 0; overflow: hidden; }
				body > .min-h-screen {
					font-family: 'TT Marxiana';
					background: #e4e8f1;
					position: absolute;
					padding: 0 30px;
					width: 100vw;
					color: #000;
				}

				#head {
					border-bottom: 2px solid #000;
				}

				#subhead {
					border-bottom: 2px solid #000;
				}

				#slogan {
					text-align: center;
					font-size: 20px;
				}

				#author {
					padding-left: 30px;
					text-align: left;
					font-size: 20px;
				}

				#date {
					padding-right: 30px;
					text-align: right;
					font-size: 20px;
				}

				#name {
					text-align: center;
					font-weight: bold;
					font-size: 80px;
				}

				#text {
					padding: 30px;
					column-count: 3;
					column-gap: 30px;
					column-rule: 2px solid black;
					column-width: 250px;
					text-align: justify;
				}

				#text > h2 {
					border-bottom: 2px solid #000;
					border-top: 2px solid #000;
					text-align: center;
					margin: 30px 30px 10px;
					font-size: 30px;
				}

				#text > h3 {
					border-bottom: 2px solid #000;
					border-top: 2px solid #000;
					text-align: center;
					margin: 30px 30px 10px;
					font-size: 20px;
				}

				#text > p {
					margin-bottom: 10px;
					font-size: 20px;
				}

				#text > blockquote {
					border-left: 1px solid #0003;
					break-inside: avoid;
					margin-bottom: 10px;
					font-style: italic;
					padding: 5px 10px;
					background: #0001;
					line-height: 1.4;
				}

				#text > img {
					border: 2px solid #000;
					filter: saturate(0.5);
				}

			</style>

			<script>
				const mobile_init = {
					skus :       [{ id: 1, name: 'sku1', category_id: 1 }, { id: 2, name: 'sku2', category_id: 169 }],
					categories : [{ id: 1, name: 'cat1'}, { id: 2, name: 'cat2', parent_id: 1 }, { id: 3, name: 'cat3'}, { id: 4, name: 'cat4', parent_id: 2 }, { id: 5, name: 'cat5', parent_id: 1 }, { id: 169, name: 'cat169', parent_id: 1 }],
					shop_skus :  {
						'1': {
							'24': {
								sku_id: 2373,
								date_end_days: 312
							},
							'25': {
								sku_id: 2323
							}
						},
						'2': {
							'33': {
								sku_id: 2573,
								date_end_days: 313
							}
						},
					}
				}

				class Task {

					constructor({ skus, categories, shop_skus }){
						this.skus = this.array2hash(skus);
						this.categories = this.array2hash(categories);
						this.#generateTree();
						this.shop_skus = this.make_shop_skus_array(shop_skus);
					}

					/**
					 * Добавляет в хеш-таблицу дочерние категории и атрибуты
					 */
					#generateTree(){
						this.headCategories = [];
						for(const c in this.categories){
							this.categories[c].skus = [];
							this.categories[c].categories = [];
							if(!this.categories[c].parent_id){
								this.headCategories.push(c);
								continue;
							}
							this.categories[this.categories[c].parent_id].categories.push(c);
						}

						for(const s in this.skus){
							this.categories[this.skus[s].category_id].skus.push(s);
						}
					}

					/**
					 * Отрисовка дерева каталогов и товаров. Может принять массив ID каталогов, которые нужно отфильтровать
					 * @param  {Array}  filter Массив ID каталогов, которые будут выведены
					 * @return {String}
					 */
					renderTree(filter){
						this.text = 'Tree:';
						this.originalFilter = filter ?? [];
						this.filter = false;

						if(filter) this.#updateFilter(filter);

						for(const c of this.#getFilteredArray(this.headCategories))
							this.#addTreeText(c, this.categories[c], 1, [c]);

						return this.text;
					}

					/**
					 * Добавляет в текст строку с элементом и его дочерние элементы
					 * @param {String} id   ID элемента
					 * @param {Object} item Объект элемента
					 * @param {Number} lvl  Отступ
					 * @param {Array}  path Путь
					 */
					#addTreeText(id, item, lvl, path){
						this.text += '\n' + this.#getSpace(lvl*2) + '-- ' + item.name;

						if(item.categories)
							for(const c of this.#getFilteredArray(item.categories))
								this.#addTreeText(c, this.categories[c], lvl + 1, [...path, ...[c]]);

						if(item.skus && (!this.originalFilter.length || this.originalFilter.filter(i => path.includes(i)).length))
							for(const s of item.skus)
								this.#addTreeText(s, this.skus[s], lvl + 1, path);
					}

					/**
					 * Возвращает строку с указанным количеством пробелов
					 * @param  {Number} length
					 * @return {String}
					 */
					#getSpace(length){
						let str = '';
						while(str.length < length) str += ' ';
						return str;
					}


					/**
					 * Обновление this.filter
					 * @param {Array} filter
					 */
					#updateFilter(filter){
						this.filter = [];

						for(const f in filter)
							filter[f] = String(filter[f]);

						for(const c in this.categories){
							if(!filter.includes(c)) continue;

							this.#addFilter(c);
						}
					}

					/**
					 * Добавляет в this.filter выбранную категорю и его родителя
					 * @param {String} c ID категории
					 */
					#addFilter(c){
						this.filter.push(c);

						if(this.categories[c].parent_id)
							this.#addFilter(String(this.categories[c].parent_id));
					}

					/**
					 * Фильтрует массив
					 * @param  {Array} arr Массив
					 * @return {Array} arr
					 */
					#getFilteredArray(arr){
						if(!this.filter) return arr;
						return arr.filter(i => this.filter.includes(i));
					}


					/**
					 * Возвращает хеш-таблицу массива
					 * @param  {Array} array Массив
					 * @return {Object}      Хеш-массив
					 */
					array2hash(array){
						let hash = {};
						for(const item of array){
							let data = {};
							for(let i in item)
								data[i] = item[i];
							delete data.id;
							hash[item.id] = data;
						}
						return hash;
					}


					/**
					 * Преобразование shop_skus в массив объектов
					 * @param  {Object} shop_skus
					 * @return {Array}
					 */
					make_shop_skus_array(shop_skus){
						let skus_array = [];

						for(const matrix_type_id in shop_skus){
							for(const shop_id in shop_skus[matrix_type_id]){
								let skus = {
									shop_id: shop_id,
									matrix_type_id: matrix_type_id,
									sku_id: shop_skus[matrix_type_id][shop_id].sku_id
								};

								if(shop_skus[matrix_type_id][shop_id].date_end_days)
									skus.date_end_days = shop_skus[matrix_type_id][shop_id].date_end_days

								skus_array.push(skus);
							}
						}

						return skus_array;
					}

				}

				const t = new Task(mobile_init);
				console.log(t.categories, t.skus); // Task 0
				console.log(t.renderTree()); // Task 1
				console.log(t.renderTree(['169', '172'])); // Task 2
				console.log(t.shop_skus); // Task 3
			</script>

		</main>
	</div>

</body>
</html>
