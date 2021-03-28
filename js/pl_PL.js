(function () {
    if (!!(this.Shop) && !!(this.Shop.lang)) {
        this.Shop.lang.plugins = {};

        this.Shop.lang.name = 'pl_PL';

        this.Shop.lang.common = {
            product_vote_alert: 'Błąd podczas wysyłania głosu.',
            product_stock_select: 'wybierz',
            product_stock_download_error: 'Błąd podczas pobierania produktu.',
            product_select_stock: 'Wybierz wariant produktu.',
            product_select_optionfile: 'Wskaż wymagane pliki',
            product_select_optiontext: 'Wypełnij wymagane pola tekstowe',
            product_select_optionradio: 'Wybierz/wypełnij wymagane pola',
            product_select_optionselect: 'Wypełnij wymagane opcje',
            product_select_optioncheckbox: 'Wypełnij wymagane opcje',
            product_select_optioncolor: 'Wybierz kolor',
            maps_position_error: 'Brak dostępu do informacji o Twojej lokalizacji.',
            file_too_big: 'Wybrany plik przekracza limit {size}MB.',
            search: 'Szukaj w sklepie',
            view_rwd_version: 'Pokaż wersję responsywną',
            view_desktop_version: 'Pokaż pełną wersję strony',
            close: 'zamknij',
            recaptchaRequired: 'Nie wypełniono pola reCAPTCHA',
            request: {
                get_error: 'Wystąpił błąd podczas pobierania danych. Spróbuj ponownie za chwile',
                send_error: 'Wystąpił błąd podczas wysyłania danych. Spróbuj ponownie za chwile',
                parse_error: 'Wystąpił błąd podczas zapisywania zmian. Niepoprawna wartość',
                unexpected_error: 'Wystąpił nieoczekiwany błąd'
            },
            full_screen: 'pełny ekran',
            alert: 'Wiadomość ze sklepu',
            remove: 'usuń',
            basket_discount: 'suma (po rabacie)',
            email: 'Adres email',
            discount: 'promocja',
            newP: 'nowość',
            select: 'wybierz',
            loading: 'pobieranie',
            ok: 'ok',
            offline: 'Nie jesteś połączony z Internetem',
            offline_long: 'Wprowadzane zmiany nie zostaną zapisane, a niektóre informacje mogą być nieaktualne.',
            empty: 'pusty'
        };

        this.Shop.lang.quickview = {
            availability: 'Dostępność',
            delivery: 'Wysyłka',
            evaluation: 'Ocena',
            producer: 'Producent',
            price: 'Cena',
            addtobasket: 'Do koszyka',
            exchange: 'Wymień'
        };

        this.Shop.lang.voting = {
            vote_n: 'Wystaw produktowi ocenę {score}.',
            vote_message: 'Twoja ocena'
        };

        this.Shop.lang.basket = {
            address_request_error: 'Błąd podczas pobierania adresu.',
            shipping_different_country: 'Kraj danych adresowych nie jest obsługiwany przez wybraną formę dostawy. Musisz podać inny adres dostawy.',
            shipping_payment_cost: 'Koszt dostawy i płatności',
            shipping_payment: 'Koszt dostawy',
            shipping_payment_from: 'Koszt dostawy od',
            add_to_cart: 'Do koszyka',
            exchange: 'Wymień'
        };

        this.Shop.lang.skinpreview = {
            close: 'Zamknij podgląd'
        };

        this.Shop.lang.milkbox = {
            x_of_y: 'z'
        };

        this.Shop.lang.filter = {
            show_more: 'więcej',
            show_less: 'mniej',
            mobile_show_more: '(pokaż więcej)'
        };

        this.Shop.lang.ajaxlayer = {
            error: 'Błąd żądania danych.'
        };

        this.Shop.lang.bundle = {
            choose: 'Wybierz elementy zestawu'
        };

        this.Shop.lang.ajaxbasket = {
            submit_error: 'Błąd podczas dodawania produktu do koszyka.',
            product_added: 'Pomyślnie dodano do koszyka:',
            product_name: '{name} ({quantity} {unit})',
            continue_shopping: 'Kontynuuj zakupy',
            goto_basket: 'Złóż zamówienie',
            basket_items: 'W koszyku produktów: {count}. Wartość: {sum}.',
            quantity: 'Ilość',
            netto_label: 'Cena netto',
            brutto_label: 'Cena brutto',
            basket_value: 'Wartość koszyka',
            basket_value_discount: 'Wartość koszyka (po rabacie)',
            products_number: 'Ilość produktów w koszyku',
            free_shipping_empty: 'Darmowa dostawa ({shippingName}) już od {shippingAmount}.',
            free_shipping_higher: 'Zamówienie za więcej niż {shippingAmount} - otrzymujesz darmową dostawę ({shippingName}).',
            free_shipping_equal: 'Zamówienie za {shippingAmount} - otrzymujesz darmową dostawę ({shippingName}).',
            free_shipping_lower: 'Brakuje Ci {shippingAmount} do darmowej dostawy ({shippingName}).'
        };

        this.Shop.lang.creditcard = {
            invalid_number: 'Nieprawidłowy numer karty',
            invalid_security_code: 'Nieprawidłowy kod weryfikacyjny'
        };

        this.Shop.lang.product = {
            availability_notify_title: 'Powiadom mnie o dostępności',
            availability_email_description: 'Na podany adres e-mail zostanie wysłane powiadomienie gdy<br> produkt będzie dostępny w naszym magazynie',
            availability_save: 'Zapisz się',
            availability_success: 'Dany adres e-mail został dodany do listy oczekujących',
            availability_email_found: 'Dany adres e-mail istnieje już na liście oczekujących',
            availability_unsub_success: 'Powiadomienie o dostępności zostało anulowane',
            availability_unsub_not_found: 'Użytkownik nie jest zapisany do listy oczekujących na dany produkt',
            availability_unsub_not_logged: 'Musisz być zalogowany, aby anulować powiadomienie o dostępności dla danego produktu'
        };

        this.Shop.lang.pickupsPoints = {
            find_point: 'Znajdź najbliższy punkt odbioru',
            enter_address: 'Wprowadź adres',
            select_pickup_point: 'Wybierz punkt odbioru',
            select_pickup_point_list: 'Wybierz punkt odbioru z listy',
            change_pickup_point: 'zmień punkt',
            api_error: 'Coś poszło nie tak z API',
            only_prepayment: 'Tylko przedpłata',
            selected_pickup_point_header: 'Wybrany punkt odbioru',
            only_prepayment_label: 'Ten punkt odbioru nie obsługuje niektórych metod płatności',
            searching_location: 'Wyszukiwanie twojej lokalizacji'
        };

        this.Shop.lang.fileUploader = {
            wrong_extension: '{filename} ma złe rozszerzenie.',
            wrong_size: '{filename} przekracza maksymalny rozmiar. Dozwolone {size} KB.'
        };

        this.Shop.lang.verificationService = {
            request_sent: 'żądanie wysłane',
            verification_code_header: 'Wysłaliśmy Ci kod weryfikacyjny',
            verification_code_filed_info: 'Coś poszło nie tak i nie możemy wysłać wiadomość e-mail. Prosimy spróbować ponownie za kilka minut.',
            verification_code_info: 'Wysłaliśmy Ci kod weryfikacyjny na Twój adres e-mail {email}. Sprawdź swoją skrzynkę pocztową.',
            verification_code_filed_header: 'Wysyłanie nie powiodło się',
        };

        this.Shop.lang.rodo = {
            archive_downloaded: 'Dziękujemy za pobranie archiwum',
            archive_downloaded_header: 'Pobrano archiwum'
        };

        this.Shop.lang.search = {
            start_phrases_header: 'Sugerowane Wyszukiwania',
            load_more: 'więcej',
            show_all_products: 'pokaż wszystkie produkty',
            go_to_products: 'Przejdź do produktów dla: {name}',
            history: 'Historia',
            suggestions: 'Sugestie',
            products: 'Produkty',
            products_section_title: 'Wyniki dla: {name}',
            producers: 'Producenci',
            in_category: 'w kategorii',
            message_empty_input_history: 'Wprowadź hasło wyszukiwania lub skorzystaj z sugerowanych wyszukiwań poniżej.',
            message_empty_input: 'Wpisz szukane hasło.',
            message_no_result: 'szukaj w sklepie',
            category: 'kategoria',
            error: 'Ooops! Nastąpił błąd.<br> spróbuj <a class="js__search-refresh-xhr">odświeżyć wyszukiwanie.</a><br> , jeśli coś nie działa, spróbuj później. Przepraszamy!',
            stock_price_info: 'Cena dot. modelu bazowego. Warianty mogą mieć inną cenę.',
            more_producers: 'Więcej producentów',
            more_products: 'Więcej produktów'
        };

        this.Shop.lang.onlinePayment = {
            pay_quickly: 'zapłać błyskawicznie',
            choose_bank: 'lub wybierz bank'
        };

        this.Shop.lang.plugins.inpost = {
            header: 'Dane do wysyłki - Paczkomaty InPost',
            service_info: 'Skorzystanie z usługi Paczkomatu 24/7 jest związane z przekazaniem danych (imię i nazwisko, adres email, telefon komórkowy, kod pocztowy) do firmy InPost.',
            service_accept: 'Zapoznałem się i %s akceptuję regulamin świadczenia usługi Paczkomaty 24/7 %s',
            service_link: 'https://inpost.pl/sites/default/files/regulaminy/regulamin-swiadczenia-uslugi-paczkomaty-24/7-przez-inpost-paczkomaty-sp-z-o-o-obowiazujacy-od-09-11-2018-2853.pdf',
            terms_link: 'https://inpost.pl/sites/default/files/docs/regulaminy/regulamin-swiadczenia-uslugi-paczkomaty-247-przez-inpost-paczkomaty-sp-z-oo-obowiazujacy-od-02102019_3.pdf',
            enterzipcode: 'Wybór Paczkomatu dostępny po podaniu poprawnego kodu pocztowego',
            request_error: 'Błąd podczas pobierania listy Paczkomatów. Spróbuj za chwilę.',
            nonear: 'Nie udało się znaleźć Paczkomatu w pobliżu Twojego kodu pocztowego.',
            showall: 'pokaż wszystkie Paczkomaty',
            showother: 'pokaż pozostałe Paczkomaty',
            select_machine: '(wybierz)',
            alert_select_machine: 'Najpierw wybierz Paczkomat',
            alert_accept_terms: 'Aby kontynować, musisz zaakceptować regulamin świadczenia usług Paczkomaty 24/7'
        };

        this.Shop.lang.productGallery = {
            copyLinkToGallery: 'Skopiuj link do galerii',
            copyLink: 'Skopiuj link',
            linkCopied: 'Skopiowano link',
            picture: 'Zdjęcie'
        };

        this.Shop.lang.plugins.paczkomaty = this.Shop.lang.plugins.inpost;
    }
})();