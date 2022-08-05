<b-navbar toggleable="lg" type="dark">

    <div class="container">
        <b-navbar-brand href="/">
            <img src="{{ asset('images/IGC.png') }}" alt="IGC">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>

                <b-nav-item href="https://discordapp.com/invite/htBgEU5">Discord</b-nav-item>
                <b-nav-item href="{{ route('law') }}">Устав</b-nav-item>
                <b-nav-item href="{{ route('levels') }}">Уровни</b-nav-item>

                <b-nav-item-dropdown text="Выборы" right>
                    <b-dropdown-item href="#">2022-03</b-dropdown-item>
                    <b-dropdown-item href="#">2022-03</b-dropdown-item>
                    <b-dropdown-item href="#">2022-03</b-dropdown-item>
                    <b-dropdown-item href="#">2022-03</b-dropdown-item>
                </b-nav-item-dropdown>

            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto navbar-user">

                @auth
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            @php
                                $member = Auth::user()->member();
                            @endphp
                            <img src="https://cdn.discordapp.com/{{ $member->avatar }}" alt="{{ $member->name }}">
                            <span>{{ $member->name }}</span>
                            <small>#{{ $member->discriminator }}</small>
                        </template>
                        <b-dropdown-item href="{{ route('logout') }}">Выход</b-dropdown-item>
                    </b-nav-item-dropdown>
                @else
                    <b-nav-item href="{{ route('login') }}">Вход</b-nav-item>
                @endauth

            </b-navbar-nav>
        </b-collapse>
    </div>

</b-navbar>
