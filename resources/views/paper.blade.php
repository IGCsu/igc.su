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
				<div id="name" class="col-6">Открытый ВестникЪ</div>
				<div class="col-3"></div>

			</div>

			<div id="subhead" class="row">

				<div id="author" class="col-2">Российская Империя</div>
				<div id="slogan" class="col-8">Только правда</div>
				<div id="date" class="col-2">Осень 1862</div>

			</div>

			<article id="text">

				<h2>Гражданская война за океаном.</h2>

                <p>В молодом государстве случился раскол. Северные их земли давно искоренили рабство, в то время как южные регионы продолжают жить как варвары, используя рабский труд.</p>
                <p>Российская Империя намерена развивать свои земли на том континенте и разумеется, варвары, которые уже успели предать договорённости, представляют угрозу нашей колонии.</p>
                <p>Мы поддержим демократов и свободу. Будем бороться против варваров и даруем свободу всем чёрным (это кто кстати? Кто то знает?).</p>

                <p><b>Российская Империя объявляет освободительную войну Конфедеративным Штатам Америки.</b> Мы будем сражаться до тех пор, пока рабовладельцы не уйдут с земель свободных людей.</p>

                <p>Стало известно о том, что Британская Колумбия воспользовалась слабостью США в этот трудный час, и ввела войска на территорию США.</p>
                <p>В связи с этим, <b>Российская Империя объявляет колониальную войну Британской Колумбии.</b></p>

                <h3>Договорённости на юге и востоке</h3>

                <p>Заключены пакты о ненападении, а так же установлены границы с государствами Турции, Китая и Японии.</p>
                <p>Согласно этим договорённостям, России переходят земли в центральной Азии, но теряет претензии на западную и восточную Азию, включая остров Сахалин.</p>
                <p>Мирные договорённости кажутся устойчивыми, так как на востоке у России практически нет ресурсных точек, а с самими странами удаётся вести взаимовыгодную и нейтральную дипломатию. Помимо прочего, у России совершенно нет никаких интересов на востоке.</p>

                <h3>Порт Артур переходит во владение Китая</h3>

                <p>В виду отсутствия необходимости, а так же риском создания напряжения в регионе, Порт Артур был передан Китайской Империи.</p>
                <blockquote>Александр II: "Так это Порт Артур? Извините, я называл его Порт Александр. Ну сорри, обозначение PA, что ещё я мог подумать? Та же самая херня, что и с инициалами в ФИО"</blockquote>

                <br><br>

                <h3>Беспокойство в Европе</h3>

                <p>Происходит 2 приграничных конфликта на границе с Австрией и Пруссией. Конечно границы не были утверждены и закреплены, потому оказалось вполне допустимой проведение Российскими войсками наступления на территории Австрии и Пруссии.</p>
                <p>Наступление прошло без стычек, однако защитникам удалось контратаковать и освободить свои территории.</p>
                <p>Российская Империя считает, что если государственные границы не утверждены и не признаны Россией - то они не существуют, следовательно, допустимо беспрепятственные набеги на территории противника.</p>

                <h3>О газете</h3>

                <p>Это первый выпуск газеты, приуроченный началу разрушения равновесия в мире.</p>
                <p>В этой газете будут публиковаться подробные и правдивые факты, а так же официальные заявления Российской Империи.</p>

                <p>«Бoже, Царя храни!»</p>

            </article>

			<style>
				body { padding: 0; overflow: hidden; }
				body > .min-h-screen {
                    filter: sepia(1);

					font-family: 'TT Marxiana';
					background: #e4e8f1;
					position: absolute;
					padding: 0 30px;
					width: 100vw;
					color: #444;
				}

				#head {
					border-bottom: 2px solid #444;
				}

				#subhead {
					border-bottom: 2px solid #444;
				}

				#slogan {
					text-align: center;
					font-size: 20px;
				}

                #slogan span {
                    font-style: italic;
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
					border-bottom: 2px solid #444;
					border-top: 2px solid #444;
					text-align: center;
					margin: 30px 30px 10px;
					font-size: 30px;
				}

				#text > h3 {
					border-bottom: 2px solid #444;
					border-top: 2px solid #444;
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
					background: #0003;
					line-height: 1.4;
				}

				#text > img {
					border: 2px solid #444;
					filter: saturate(0.5);
				}

                .nowarp {
                    display: block;
                    break-inside: avoid;
                }

                .gold { color: #c59608; }
                .silver { color: #565656; }
                .bronze { color: #9b310f; }
                .grey { color: #9e9e9e; }

			</style>

		</main>
	</div>

</body>
</html>
