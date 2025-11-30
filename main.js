const mountains = [
            {
                id: 'bazarduzu',
                name: 'Bazardüzü',
                coords: [41.2206, 47.8642],
                altitude: '4466 m',
                difficulty: 'Mürəkkəb',
                difficultyClass: 'hard',
                country: 'Azərbaycan',
                region: 'Qusar rayonu',
                description: 'Azərbaycanın ən hündür zirvəsi. Böyük Qafqaz silsiləsində, Rusiya sərhədində yerləşir. Alpinistlər üçün ən çətin və maraqlı marşrutlardan biridir.',
                transport: ['Jeep transfer (Qusar)', 'Dağ bələdçisi ilə', 'At ilə yük daşıma'],
                routes: [
                    { type: 'Avtomobil', duration: '4-5 saat', path: 'Bakı → Qusar → Ləzə kəndi' },
                    { type: 'Piyada', duration: '2-3 gün', path: 'Ləzə düşərgəsi → Bazardüzü zirvəsi' }
                ],
                hotels: ['Şahdağ Resort', 'Qusar Park Hotel', 'Ləzə Guest House'],
                restaurants: ['Qusar Milli Mətbəx', 'Dağ Restoranı'],
                activities: ['Alpinizm', 'Trekking', 'Foto-tur', 'Düşərgə']
            },
            {
                id: 'shahdag',
                name: 'Şahdağ',
                coords: [41.2758, 48.1353],
                altitude: '4243 m',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                country: 'Azərbaycan',
                region: 'Qusar rayonu',
                description: 'Azərbaycanın ən məşhur qış kurort zonası. Müasir xizək infrastrukturu və heyrətamiz dağ mənzərələri ilə turistləri cəlb edir.',
                transport: ['Avtobus (Bakı-Qusar)', 'Taksi', 'Şəxsi avtomobil', 'Transfer xidməti'],
                routes: [
                    { type: 'Avtomobil', duration: '3 saat', path: 'Bakı → Qusar → Şahdağ Kurort' },
                    { type: 'Kanat yolu', duration: '15 dəq', path: 'Kurort → Zirvə stansiyası' }
                ],
                hotels: ['Şahdağ Hotel', 'Pik Palace', 'Zirve Hotel', 'Park Chalet'],
                restaurants: ['Altitude Restaurant', 'Şahdağ Lounge', 'Dağ Evi'],
                activities: ['Xizək', 'Snowboard', 'Paraqlaydinq', 'Trekking', 'ATV turu']
            },
            {
                id: 'tufandag',
                name: 'Tufandağ',
                coords: [40.9981, 47.8503],
                altitude: '4191 m',
                difficulty: 'Asan',
                difficultyClass: 'easy',
                country: 'Azərbaycan',
                region: 'Qəbələ rayonu',
                description: 'Qəbələ rayonunda yerləşən müasir turizm mərkəzi. Yay və qış mövsümündə fəaliyyət göstərən kanat yolu ilə məşhurdur.',
                transport: ['Avtobus (Bakı-Qəbələ)', 'Taksi', 'Şəxsi avtomobil'],
                routes: [
                    { type: 'Avtomobil', duration: '2.5 saat', path: 'Bakı → Qəbələ → Tufandağ' },
                    { type: 'Kanat yolu', duration: '20 dəq', path: 'Aşağı stansiya → Yuxarı stansiya' }
                ],
                hotels: ['Qafqaz Resort', 'Qafqaz Riverside', 'Chenot Palace', 'Marxal Resort'],
                restaurants: ['Qazmaq Restaurant', 'Riverside Cafe', 'Dədə Qorqud'],
                activities: ['Kanat yolu', 'Xizək', 'Zipline', 'At gəzintisi', 'Paraqlaydinq']
            },
            {
                id: 'babadag',
                name: 'Babadağ',
                coords: [41.1167, 48.3833],
                altitude: '3629 m',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                country: 'Azərbaycan',
                region: 'Quba rayonu',
                description: 'Quba rayonunda yerləşən müqəddəs dağ. Ziyarət yeri kimi tanınır və hər il minlərlə zəvvar buraya gəlir.',
                transport: ['Taksi (Quba)', 'Şəxsi avtomobil', 'Piyada'],
                routes: [
                    { type: 'Avtomobil', duration: '3 saat', path: 'Bakı → Quba → Babadağ ətəyi' },
                    { type: 'Piyada', duration: '4-5 saat', path: 'Babadağ ətəyi → Zirvə' }
                ],
                hotels: ['Quba Palace Hotel', 'Rixos Quba', 'Quba Olympic Complex'],
                restaurants: ['Quba Milli Mətbəx', 'Apple Garden', 'Sahil Restaurant'],
                activities: ['Ziyarət', 'Trekking', 'Meditasiya', 'Foto-tur']
            },
            {
                id: 'khinaliq',
                name: 'Xınalıq',
                coords: [41.1831, 48.1264],
                altitude: '2350 m',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                country: 'Azərbaycan',
                region: 'Quba rayonu',
                description: 'Dünyanın ən qədim yaşayış yerlərindən biri. 5000 illik tarixə malik unikal mədəniyyət və dil.',
                transport: ['Jeep (Quba)', '4x4 avtomobil'],
                routes: [
                    { type: 'Avtomobil', duration: '4 saat', path: 'Bakı → Quba → Xınalıq' },
                    { type: 'Piyada', duration: '1 gün', path: 'Qrız kəndi → Xınalıq' }
                ],
                hotels: ['Xınalıq Guest House', 'Yerli evlər', 'Quba otellər'],
                restaurants: ['Yerli ev yeməkləri', 'Xınalıq çayxanası'],
                activities: ['Mədəni tur', 'Etnoqrafiya', 'Trekking', 'Foto-tur', 'Yerli sənətkarlıq']
            },
            {
                id: 'qobustan',
                name: 'Böyükdaş',
                coords: [40.0856, 49.3772],
                altitude: '400 m',
                difficulty: 'Asan',
                difficultyClass: 'easy',
                country: 'Azərbaycan',
                region: 'Qobustan rayonu',
                description: 'Qobustan Milli Parkında yerləşən qədim qayaüstü rəsmlər məskəni. UNESCO Dünya İrsi siyahısındadır.',
                transport: ['Avtobus', 'Taksi', 'Şəxsi avtomobil', 'Tur avtobusu'],
                routes: [
                    { type: 'Avtomobil', duration: '1 saat', path: 'Bakı → Qobustan' }
                ],
                hotels: ['Bakı otelləri', 'Qobustan yaxınlığı'],
                restaurants: ['Qobustan Cafe', 'Bakı restoranları'],
                activities: ['Muzey ziyarəti', 'Qayaüstü rəsmlər', 'Palçıq vulkanları', 'Foto-tur']
            },
            {
                id: 'kapaz',
                name: 'Kəpəz',
                coords: [40.5167, 46.3167],
                altitude: '3066 m',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                country: 'Azərbaycan',
                region: 'Gədəbəy rayonu',
                description: 'Kiçik Qafqazın ən gözəl dağlarından biri. Göygöl Milli Parkının ərazisində yerləşir. Ətrafında göllər və meşələr var.',
                transport: ['Şəxsi avtomobil', 'Taksi (Gəncə)', 'Tur avtobusu'],
                routes: [
                    { type: 'Avtomobil', duration: '4 saat', path: 'Bakı → Gəncə → Göygöl → Kəpəz' },
                    { type: 'Piyada', duration: '5-6 saat', path: 'Göygöl → Kəpəz zirvəsi' }
                ],
                hotels: ['Göygöl Park Hotel', 'Gəncə otellər'],
                restaurants: ['Göygöl restoranı', 'Gəncə mətbəxi'],
                activities: ['Trekking', 'Göl turu', 'Piknik', 'Foto-tur']
            },
            {
                id: 'murovdag',
                name: 'Murovdağ',
                coords: [40.3500, 46.4167],
                altitude: '3724 m',
                difficulty: 'Mürəkkəb',
                difficultyClass: 'hard',
                country: 'Azərbaycan',
                region: 'Kəlbəcər rayonu',
                description: 'Kiçik Qafqazın ən hündür zirvəsi. Gamışdağ adı ilə də tanınır. Nadir flora və fauna növləri ilə zəngindir.',
                transport: ['4x4 avtomobil', 'Dağ bələdçisi'],
                routes: [
                    { type: 'Avtomobil', duration: '5-6 saat', path: 'Bakı → Kəlbəcər → Murovdağ ətəyi' },
                    { type: 'Piyada', duration: '2 gün', path: 'Düşərgə → Zirvə' }
                ],
                hotels: ['Kəlbəcər mehmanxanaları'],
                restaurants: ['Yerli mətbəx'],
                activities: ['Alpinizm', 'Trekking', 'Düşərgə', 'Hərbçi yolu']
            },
            {
                id: 'ilancidagi',
                name: 'İlancı dağı',
                coords: [38.9333, 48.8500],
                altitude: '2415 m',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                country: 'Azərbaycan',
                region: 'Lənkəran rayonu',
                description: 'Talış dağlarının ən hündür zirvələrindən biri. Subtropik meşələr və nadir bitki örtüyü ilə əhatə olunub.',
                transport: ['Şəxsi avtomobil', 'Taksi (Lənkəran)'],
                routes: [
                    { type: 'Avtomobil', duration: '5 saat', path: 'Bakı → Lənkəran → İlancı dağı' },
                    { type: 'Piyada', duration: '1 gün', path: 'Kənd → Zirvə' }
                ],
                hotels: ['Lənkəran otellər', 'Lerik mehmanxanaları'],
                restaurants: ['Lənkəran mətbəxi', 'Yerli restoranlar'],
                activities: ['Trekking', 'Ekoturizm', 'Quş müşahidəsi', 'Foto-tur']
            },
            {
                id: 'goyazan',
                name: 'Goyazan',
                coords: [40.8333, 48.9667],
                altitude: '857 m',
                difficulty: 'Asan',
                difficultyClass: 'easy',
                country: 'Azərbaycan',
                region: 'Şamaxı rayonu',
                description: 'Şamaxı rayonunda yerləşən tarixi dağ. Qədim astronomik rəsədxana qalıqları tapılıb.',
                transport: ['Şəxsi avtomobil', 'Taksi'],
                routes: [
                    { type: 'Avtomobil', duration: '2 saat', path: 'Bakı → Şamaxı → Goyazan' }
                ],
                hotels: ['Şamaxı otellər'],
                restaurants: ['Şamaxı restoranları'],
                activities: ['Tarixi tur', 'Trekking', 'Foto-tur']
            },
            {
                id: 'yanardag',
                name: 'Yanardağ',
                coords: [40.5017, 49.8903],
                altitude: '116 m',
                difficulty: 'Asan',
                difficultyClass: 'easy',
                country: 'Azərbaycan',
                region: 'Abşeron rayonu',
                description: 'Təbii qaz yanması nəticəsində daim alışan dağ yamacı. "Odlar yurdu" Azərbaycanın simvolu.',
                transport: ['Avtobus', 'Taksi', 'Metro + avtobus'],
                routes: [
                    { type: 'Avtomobil', duration: '30 dəq', path: 'Bakı mərkəz → Yanardağ' }
                ],
                hotels: ['Bakı otellər'],
                restaurants: ['Bakı restoranları'],
                activities: ['Muzey ziyarəti', 'Foto-tur', 'Gecə turu']
            }
        ];
        let userLocation = [40.4093, 49.8671];
        let map;
        let routingControl = null;
        let selectedMountain = null;
        let userMarker = null;
        const countryFlags = {
            'Azərbaycan': '🇦🇿',
            'Gürcüstan': '🇬🇪',
            'Ermənistan': '🇦🇲',
            'Türkiyə': '🇹🇷',
            'Rusiya': '🇷🇺',
            'İran': '🇮🇷',
            'Fransa/İtaliya': '🇫🇷',
            'İsveçrə/İtaliya': '🇨🇭',
            'Nepal/Çin': '🇳🇵',
            'Pakistan/Çin': '🇵🇰',
            'Yaponiya': '🇯🇵',
            'Tanzaniya': '🇹🇿',
            'ABŞ': '🇺🇸',
            'Argentina': '🇦🇷'
        };
        function initMap() {
            map = L.map('azerbaijan-map').setView([40.5, 47.5], 7);
            const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenTopoMap contributors',
                maxZoom: 17
            });
            const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '© Esri',
                maxZoom: 18
            });
            const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            });
            topoLayer.addTo(map);
            const baseMaps = {
                "🏔️ Fiziki Xəritə": topoLayer,
                "🛰️ Peyk Görünüşü": satelliteLayer,
                "🗺️ Standart": standardLayer
            };
            
            L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);
            addMountainMarkers(mountains);
            map.on('zoomend', updateMarkerSizes);
            getUserLocation();
        }
        function getUserLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLocation = [position.coords.latitude, position.coords.longitude];
                        addUserMarker();
                        watchUserLocation();
                    },
                    (error) => {
                        console.log('Geolocation xətası:', error.message);
                        addUserMarker();
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0
                    }
                );
            } else {
                addUserMarker();
            }
        }
        let watchId = null;
        function watchUserLocation() {
            if (navigator.geolocation && !watchId) {
                watchId = navigator.geolocation.watchPosition(
                    (position) => {
                        userLocation = [position.coords.latitude, position.coords.longitude];
                        updateUserMarkerPosition();
                    },
                    (error) => {
                        console.log('Mövqe izləmə xətası:', error.message);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 5000
                    }
                );
            }
        }
        function addUserMarker() {
            const userIcon = L.divIcon({
                className: 'user-marker-icon',
                html: `<div class="user-marker-content">
                    <span class="pulse"></span>
                    <span class="user-icon">📍</span>
                </div>`,
                iconSize: [40, 40],
                iconAnchor: [20, 40]
            });

            if (userMarker) {
                map.removeLayer(userMarker);
            }

            userMarker = L.marker(userLocation, { icon: userIcon, zIndexOffset: 1000 })
                .addTo(map)
                .bindPopup('<strong>Sizin mövqeyiniz</strong>');
        }
        function updateUserMarkerPosition() {
            if (userMarker) {
                userMarker.setLatLng(userLocation);
            }
        }
        function showMountainInfo(mountain) {
            selectedMountain = mountain;
            
            document.getElementById('infoPlaceholder').style.display = 'none';
            document.getElementById('infoContent').style.display = 'block';

            const flag = countryFlags[mountain.country] || '🏔️';
            document.getElementById('mountainName').innerHTML = `${mountain.name} <span class="country-flag">${flag}</span>`;
            document.getElementById('mountainAltitude').textContent = mountain.altitude;
            const countryInfo = document.getElementById('mountainCountry');
            if (countryInfo) {
                countryInfo.textContent = `${mountain.country} • ${mountain.region}`;
            }
            
            const difficultyBadge = document.querySelector('.difficulty-badge');
            const difficultyTranslations = {
                'Mürəkkəb': { az: 'Mürəkkəb', en: 'Difficult', ru: 'Сложный', tr: 'Zor' },
                'Orta': { az: 'Orta', en: 'Medium', ru: 'Средний', tr: 'Orta' },
                'Asan': { az: 'Asan', en: 'Easy', ru: 'Легкий', tr: 'Kolay' }
            };
            const difficultyText = difficultyTranslations[mountain.difficulty] 
                ? difficultyTranslations[mountain.difficulty][currentLanguage] || difficultyTranslations[mountain.difficulty]['az']
                : mountain.difficulty;
            difficultyBadge.textContent = difficultyText;
            difficultyBadge.className = `difficulty-badge ${mountain.difficultyClass}`;
            
            document.getElementById('mountainDescription').textContent = mountain.description;
            const transportList = document.getElementById('transportList');
            transportList.innerHTML = mountain.transport.map(t => `<li>${t}</li>`).join('');
            const routesList = document.getElementById('routesList');
            const routeTypeTranslations = {
                'Avtomobil': { az: 'Avtomobil', en: 'Car', ru: 'Автомобиль', tr: 'Araba' },
                'Piyada': { az: 'Piyada', en: 'On foot', ru: 'Пешком', tr: 'Yürüyerek' },
                'Kanat yolu': { az: 'Kanat yolu', en: 'Cable car', ru: 'Канатная дорога', tr: 'Teleferik' }
            };
            routesList.innerHTML = mountain.routes.map(r => {
                const routeType = routeTypeTranslations[r.type] 
                    ? routeTypeTranslations[r.type][currentLanguage] || routeTypeTranslations[r.type]['az']
                    : r.type;
                return `
                <div class="route-item">
                    <span class="route-type">${routeType}</span>
                    <span class="route-duration">${r.duration}</span>
                    <p class="route-path">${r.path}</p>
                </div>
            `;
            }).join('');
            const activitiesList = document.getElementById('mapActivities');
            if (activitiesList && mountain.activities) {
                const activityTranslations = {
                    'Alpinizm': { az: 'Alpinizm', en: 'Mountaineering', ru: 'Альпинизм', tr: 'Dağcılık' },
                    'Trekking': { az: 'Trekking', en: 'Trekking', ru: 'Треккинг', tr: 'Trekking' },
                    'Xizək': { az: 'Xizək', en: 'Skiing', ru: 'Лыжи', tr: 'Kayak' },
                    'Snowboard': { az: 'Snowboard', en: 'Snowboard', ru: 'Сноуборд', tr: 'Snowboard' },
                    'Foto-tur': { az: 'Foto-tur', en: 'Photo tour', ru: 'Фототур', tr: 'Foto tur' },
                    'Düşərgə': { az: 'Düşərgə', en: 'Camping', ru: 'Кемпинг', tr: 'Kamp' },
                    'Paraqlaydinq': { az: 'Paraqlaydinq', en: 'Paragliding', ru: 'Парапланеризм', tr: 'Yamaç paraşütü' },
                    'Ziyarət': { az: 'Ziyarət', en: 'Visit', ru: 'Посещение', tr: 'Ziyaret' },
                    'Meditasiya': { az: 'Meditasiya', en: 'Meditation', ru: 'Медитация', tr: 'Meditasyon' },
                    'Mədəni tur': { az: 'Mədəni tur', en: 'Cultural tour', ru: 'Культурный тур', tr: 'Kültürel tur' },
                    'Ekoturizm': { az: 'Ekoturizm', en: 'Ecotourism', ru: 'Экотуризм', tr: 'Ekoturizm' },
                    'Tarixi tur': { az: 'Tarixi tur', en: 'Historical tour', ru: 'Исторический тур', tr: 'Tarihi tur' },
                    'Kanat yolu': { az: 'Kanat yolu', en: 'Cable car', ru: 'Канатная дорога', tr: 'Teleferik' },
                    'Zipline': { az: 'Zipline', en: 'Zipline', ru: 'Зиплайн', tr: 'Zipline' },
                    'ATV turu': { az: 'ATV turu', en: 'ATV tour', ru: 'Квадроцикл тур', tr: 'ATV turu' }
                };
                activitiesList.innerHTML = mountain.activities.map(act => {
                    const activityText = activityTranslations[act] 
                        ? activityTranslations[act][currentLanguage] || activityTranslations[act]['az']
                        : act;
                    return `<span class="activity-tag clickable" onclick="openActivityModal('${act}')">${activityText}</span>`;
                }).join('');
            }
            document.getElementById('detailsBtn').href = `mountain-details.html?id=${mountain.id}`;
            document.getElementById('googleMapsBtn').href = 
                `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${mountain.coords[0]},${mountain.coords[1]}`;
            updateFavoriteButton(mountain);
            map.flyTo(mountain.coords, 10, { duration: 1 });
        }
        function updateFavoriteButton(mountain) {
            const favBtn = document.getElementById('favoriteBtn');
            const user = getCurrentUser();
            
            if (!user) {
                favBtn.querySelector('.fav-icon').textContent = '🤍';
                return;
            }
            
            const favorites = user.favorites || [];
            const isFavorite = favorites.some(f => f.id === mountain.id);
            
            favBtn.querySelector('.fav-icon').textContent = isFavorite ? '❤️' : '🤍';
            favBtn.classList.toggle('is-favorite', isFavorite);
        }
        function toggleFavorite() {
            const user = getCurrentUser();
            
            if (!user) {
                showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə etmək üçün giriş edin' : 'Login to add to favorites', 'error');
                openLoginModal();
                return;
            }
            
            if (!selectedMountain) return;
            
            const favorites = user.favorites || [];
            const existingIndex = favorites.findIndex(f => f.id === selectedMountain.id);
            
            if (existingIndex !== -1) {
                favorites.splice(existingIndex, 1);
                showNotification(currentLanguage === 'az' ? 'Sevimlilərdən silindi' : 'Removed from favorites', 'success');
            } else {
                favorites.push({
                    id: selectedMountain.id,
                    name: selectedMountain.name,
                    altitude: selectedMountain.altitude,
                    country: selectedMountain.country,
                    image: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400`,
                    type: 'mountain'
                });
                showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə edildi' : 'Added to favorites', 'success');
            }
            
            user.favorites = favorites;
            updateCurrentUser(user);
            const users = getUsers();
            const userIndex = users.findIndex(u => u.id === user.id);
            if (userIndex !== -1) {
                users[userIndex].favorites = favorites;
                saveUsers(users);
            }
            
            updateFavoriteButton(selectedMountain);
        }
        function getCurrentUser() {
            const user = localStorage.getItem(CURRENT_USER_KEY);
            return user ? JSON.parse(user) : null;
        }
        function updateCurrentUser(userData) {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
        }
        function toggleTourFavorite(btn) {
            const user = getCurrentUser();
            
            if (!user) {
                showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə etmək üçün giriş edin' : 'Login to add to favorites', 'error');
                openLoginModal();
                return;
            }
            
            const tourCard = btn.closest('.tour-card');
            const tourId = tourCard.dataset.tourId;
            const tourName = tourCard.querySelector('h3').textContent;
            const tourPrice = tourCard.querySelector('.tour-price').textContent;
            
            const favorites = user.favorites || [];
            const existingIndex = favorites.findIndex(f => f.id === tourId);
            
            if (existingIndex !== -1) {
                favorites.splice(existingIndex, 1);
                btn.textContent = '🤍';
                btn.classList.remove('is-favorite');
                showNotification(currentLanguage === 'az' ? 'Sevimlilərdən silindi' : 'Removed from favorites', 'success');
            } else {
                favorites.push({
                    id: tourId,
                    name: tourName,
                    price: tourPrice,
                    type: 'tour',
                    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400'
                });
                btn.textContent = '❤️';
                btn.classList.add('is-favorite');
                showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə edildi' : 'Added to favorites', 'success');
            }
            
            user.favorites = favorites;
            updateCurrentUser(user);
            const users = getUsers();
            const userIndex = users.findIndex(u => u.id === user.id);
            if (userIndex !== -1) {
                users[userIndex].favorites = favorites;
                saveUsers(users);
            }
        }
        function loadTourFavorites() {
            const user = getCurrentUser();
            if (!user) return;
            
            const favorites = user.favorites || [];
            document.querySelectorAll('.tour-card').forEach(card => {
                const tourId = card.dataset.tourId;
                const btn = card.querySelector('.tour-favorite-btn');
                if (btn && favorites.some(f => f.id === tourId)) {
                    btn.textContent = '❤️';
                    btn.classList.add('is-favorite');
                }
            });
        }

        const guidesData = {
            elchin: {
                id: 'elchin',
                name: 'Elçin Məmmədov',
                role: { az: 'Baş Bələdçi', en: 'Head Guide', ru: 'Главный гид', tr: 'Baş Rehber' },
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                experience: 15,
                tours: 450,
                rating: '4.9',
                bio: {
                    az: 'Elçin 15 ildən artıqdır ki, dağ turizmində fəaliyyət göstərir. Bazardüzü zirvəsini 20 dəfədən çox fəth edib. Beynəlxalq alpinizm sertifikatlarına malikdir.',
                    en: 'Elchin has been active in mountain tourism for over 15 years. He has conquered Bazarduzu peak more than 20 times. He holds international alpinism certificates.',
                    ru: 'Эльчин работает в горном туризме более 15 лет. Он покорил вершину Базардюзю более 20 раз. Имеет международные сертификаты по альпинизму.',
                    tr: 'Elçin 15 yılı aşkın süredir dağ turizminde aktif. Bazardüzü zirvesini 20\'den fazla kez fethetti. Uluslararası dağcılık sertifikalarına sahip.'
                },
                certs: ['UIAGM Alpinizm Sertifikatı', 'İlk Yardım Sertifikatı', 'Xilasetmə Təlimi'],
                languages: ['🇦🇿 Azərbaycan', '🇷🇺 Русский', '🇬🇧 English']
            },
            leyla: {
                id: 'leyla',
                name: 'Leyla Həsənova',
                role: { az: 'Trekking Bələdçisi', en: 'Trekking Guide', ru: 'Гид по треккингу', tr: 'Trekking Rehberi' },
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
                experience: 8,
                tours: 280,
                rating: '4.8',
                bio: {
                    az: 'Leyla ekoturizm və təbiət mühafizəsi sahəsində mütəxəssisdir. Xınalıq, Lahıc və digər tarixi kəndlərə turlar təşkil edir.',
                    en: 'Leyla is a specialist in ecotourism and nature conservation. She organizes tours to Khinalig, Lahij and other historical villages.',
                    ru: 'Лейла - специалист по экотуризму и охране природы. Организует туры в Хыналыг, Лагич и другие исторические села.',
                    tr: 'Leyla ekoturizm ve doğa koruma uzmanıdır. Hınalık, Lahıc ve diğer tarihi köylere turlar düzenler.'
                },
                certs: ['Ekoturizm Sertifikatı', 'İlk Yardım Sertifikatı', 'Botanika Eksperti'],
                languages: ['🇦🇿 Azərbaycan', '🇬🇧 English', '🇹🇷 Türkçe']
            },
            rashad: {
                id: 'rashad',
                name: 'Rəşad Əliyev',
                role: { az: 'Qış Turları Bələdçisi', en: 'Winter Tours Guide', ru: 'Гид по зимним турам', tr: 'Kış Turları Rehberi' },
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
                experience: 10,
                tours: 320,
                rating: '4.9',
                bio: {
                    az: 'Rəşad professional xizəkçi və qış idmanları mütəxəssisidir. Şahdağ və Tufandağ kurortlarında 10 il instruktor kimi çalışıb.',
                    en: 'Rashad is a professional skier and winter sports specialist. He has worked as an instructor at Shahdag and Tufandag resorts for 10 years.',
                    ru: 'Рашад - профессиональный лыжник и специалист по зимним видам спорта. 10 лет работал инструктором на курортах Шахдаг и Туфандаг.',
                    tr: 'Reşad profesyonel kayakçı ve kış sporları uzmanıdır. Şahdağ ve Tufandağ tatil köylerinde 10 yıl eğitmen olarak çalıştı.'
                },
                certs: ['FIS Xizək Instruktoru', 'Çığ Təhlükəsizliyi', 'Dağ Xilasetməsi'],
                languages: ['🇦🇿 Azərbaycan', '🇷🇺 Русский', '🇬🇧 English']
            }
        };

        let currentGuideId = null;

        const activitiesData = {
            'Alpinizm': {
                icon: '🧗',
                name: { az: 'Alpinizm', en: 'Mountaineering', ru: 'Альпинизм', tr: 'Dağcılık' },
                desc: { 
                    az: 'Alpinizm dağların zirvələrinə qalxmaq sənətidir. Professional avadanlıq və təcrübə tələb edir. Azərbaycanın ən yüksək zirvələrini fəth etmək üçün ideal fürsətdir.',
                    en: 'Mountaineering is the art of climbing to mountain peaks. Requires professional equipment and experience. An ideal opportunity to conquer Azerbaijan\'s highest peaks.'
                },
                duration: { az: '2-7 gün', en: '2-7 days' },
                difficulty: { az: 'Mürəkkəb', en: 'Hard' },
                price: '₼500-1500',
                group: { az: '5-12 nəfər', en: '5-12 people' },
                requirements: [
                    { az: 'Fiziki hazırlıq', en: 'Physical fitness' },
                    { az: 'Əsas alpinizm təcrübəsi', en: 'Basic mountaineering experience' },
                    { az: 'Tibbi arayış', en: 'Medical certificate' },
                    { az: '18 yaşdan yuxarı', en: 'Age 18+' }
                ],
                equipment: ['İp', 'Karabinlər', 'Alpinizm ayaqqabısı', 'Kaska', 'Buz baltası']
            },
            'Trekking': {
                icon: '🥾',
                name: { az: 'Trekking', en: 'Trekking', ru: 'Треккинг', tr: 'Trekking' },
                desc: { 
                    az: 'Uzun məsafəli piyada gəzintilər dağ cığırları boyunca. Təbiətin gözəlliklərini kəşf etmək və fiziki aktivlik üçün əla seçimdir.',
                    en: 'Long-distance hiking along mountain trails. An excellent choice for discovering natural beauty and physical activity.'
                },
                duration: { az: '1-5 gün', en: '1-5 days' },
                difficulty: { az: 'Orta', en: 'Medium' },
                price: '₼100-400',
                group: { az: '5-20 nəfər', en: '5-20 people' },
                requirements: [
                    { az: 'Yaxşı fiziki forma', en: 'Good physical condition' },
                    { az: 'Rahat gəzinti ayaqqabısı', en: 'Comfortable hiking shoes' },
                    { az: 'Yaş məhdudiyyəti yoxdur', en: 'No age limit' }
                ],
                equipment: ['Trekking çubuqları', 'Bel çantası', 'Su qabı', 'Günəş eynəyi']
            },
            'Foto-tur': {
                icon: '📸',
                name: { az: 'Foto-tur', en: 'Photo Tour', ru: 'Фото-тур', tr: 'Foto Tur' },
                desc: { 
                    az: 'Professional fotoqraflar müşayiəti ilə dağ mənzərələrinin çəkilişi. Gün doğumu və gün batımı anlarında ən gözəl kadrları çəkmək üçün ideal.',
                    en: 'Mountain landscape photography with professional photographers. Ideal for capturing the most beautiful shots at sunrise and sunset.'
                },
                duration: { az: '1-3 gün', en: '1-3 days' },
                difficulty: { az: 'Asan', en: 'Easy' },
                price: '₼200-600',
                group: { az: '3-10 nəfər', en: '3-10 people' },
                requirements: [
                    { az: 'Fotoaparat (istənilən növ)', en: 'Camera (any type)' },
                    { az: 'Xüsusi hazırlıq tələb olunmur', en: 'No special preparation required' }
                ],
                equipment: ['Kamera', 'Tripod', 'Əlavə batareya', 'Yaddaş kartları']
            },
            'Düşərgə': {
                icon: '⛺',
                name: { az: 'Düşərgə', en: 'Camping', ru: 'Кемпинг', tr: 'Kamp' },
                desc: { 
                    az: 'Dağ ətəklərində çadır qurub gecələmək. Ulduzlu səma altında unudulmaz gecələr keçirmək və təbiətlə baş-başa qalmaq.',
                    en: 'Setting up tents and camping at mountain bases. Spending unforgettable nights under starry skies and being one with nature.'
                },
                duration: { az: '1-4 gecə', en: '1-4 nights' },
                difficulty: { az: 'Asan', en: 'Easy' },
                price: '₼80-250',
                group: { az: '4-15 nəfər', en: '4-15 people' },
                requirements: [
                    { az: 'Yuxu tulumu', en: 'Sleeping bag' },
                    { az: 'İsti geyim', en: 'Warm clothing' }
                ],
                equipment: ['Çadır', 'Yuxu tulumu', 'Karimat', 'Fənər', 'Bıçaq']
            },
            'Xizək': {
                icon: '⛷️',
                name: { az: 'Xizək', en: 'Skiing', ru: 'Лыжи', tr: 'Kayak' },
                desc: { 
                    az: 'Qış mövsümündə dağ xizəyi. Şahdağ və Tufandağ kurortlarında müasir pistlərdə xizək sürmək imkanı.',
                    en: 'Mountain skiing during winter season. Opportunity to ski on modern slopes at Shahdag and Tufandag resorts.'
                },
                duration: { az: '1-7 gün', en: '1-7 days' },
                difficulty: { az: 'Müxtəlif', en: 'Various' },
                price: '₼150-800',
                group: { az: '1-20 nəfər', en: '1-20 people' },
                requirements: [
                    { az: 'Əsas xizək bacarığı (yeni başlayanlar üçün dərslər var)', en: 'Basic skiing skills (lessons available for beginners)' }
                ],
                equipment: ['Xizək', 'Çubuqlar', 'Botlar', 'Kaska', 'Xizək geyimi']
            },
            'Snowboard': {
                icon: '🏂',
                name: { az: 'Snowboard', en: 'Snowboarding', ru: 'Сноуборд', tr: 'Snowboard' },
                desc: { 
                    az: 'Qar üzərində sürüşmə taxtası ilə ekstremal idman. Adrenalin həvəskarları üçün ideal seçim.',
                    en: 'Extreme sport on snow with a snowboard. An ideal choice for adrenaline enthusiasts.'
                },
                duration: { az: '1-7 gün', en: '1-7 days' },
                difficulty: { az: 'Orta-Mürəkkəb', en: 'Medium-Hard' },
                price: '₼200-900',
                group: { az: '1-15 nəfər', en: '1-15 people' },
                requirements: [
                    { az: 'Balans bacarığı', en: 'Balance skills' },
                    { az: 'Yeni başlayanlar üçün kurs mövcuddur', en: 'Courses available for beginners' }
                ],
                equipment: ['Snowboard', 'Botlar', 'Kaska', 'Qoruyucu geyim']
            },
            'Paraqlaydinq': {
                icon: '🪂',
                name: { az: 'Paraqlaydinq', en: 'Paragliding', ru: 'Параглайдинг', tr: 'Yamaç Paraşütü' },
                desc: { 
                    az: 'Dağ zirvələrindən paraşütlə uçuş. Quş kimi sərbəst uçmaq və dağ mənzərələrini yuxarıdan seyr etmək.',
                    en: 'Paragliding from mountain peaks. Flying freely like a bird and viewing mountain landscapes from above.'
                },
                duration: { az: '15-45 dəqiqə uçuş', en: '15-45 min flight' },
                difficulty: { az: 'Orta', en: 'Medium' },
                price: '₼150-350',
                group: { az: 'Fərdi/Tandem', en: 'Individual/Tandem' },
                requirements: [
                    { az: 'Çəki limiti: 40-100 kq', en: 'Weight limit: 40-100 kg' },
                    { az: 'Ürək xəstəliyi olmamalı', en: 'No heart conditions' }
                ],
                equipment: ['Paraşüt (təmin edilir)', 'Kaska', 'Qoruyucu geyim']
            },
            'Spa': {
                icon: '💆',
                name: { az: 'Spa', en: 'Spa', ru: 'Спа', tr: 'Spa' },
                desc: { 
                    az: 'Dağ kurortlarında istirahət və bərpa prosedurları. Masaj, sauna, hovuz və digər relaksasiya xidmətləri.',
                    en: 'Rest and recovery procedures at mountain resorts. Massage, sauna, pool and other relaxation services.'
                },
                duration: { az: '2-4 saat', en: '2-4 hours' },
                difficulty: { az: 'Asan', en: 'Easy' },
                price: '₼100-400',
                group: { az: 'Fərdi/Cütlük', en: 'Individual/Couple' },
                requirements: [
                    { az: 'Xüsusi tələb yoxdur', en: 'No special requirements' }
                ],
                equipment: ['Çimərlik geyimi', 'Dəsmal']
            }
        };

        function openActivityModal(activityName) {
            const activity = activitiesData[activityName];
            if (!activity) {
                document.getElementById('activityModalIcon').textContent = '🏔️';
                document.getElementById('activityModalName').textContent = activityName;
                document.getElementById('activityModalDesc').textContent = currentLanguage === 'az' 
                    ? 'Bu aktivitə haqqında ətraflı məlumat tezliklə əlavə olunacaq.' 
                    : 'Detailed information about this activity will be added soon.';
                document.getElementById('activityModalDuration').textContent = '-';
                document.getElementById('activityModalDifficulty').textContent = '-';
                document.getElementById('activityModalPrice').textContent = '-';
                document.getElementById('activityModalGroup').textContent = '-';
                document.getElementById('activityModalRequirements').innerHTML = '';
                document.getElementById('activityModalEquipment').innerHTML = '';
                document.getElementById('activityModal').classList.add('active');
                return;
            }

            document.getElementById('activityModalIcon').textContent = activity.icon;
            document.getElementById('activityModalName').textContent = activity.name[currentLanguage] || activity.name.az;
            document.getElementById('activityModalDesc').textContent = activity.desc[currentLanguage] || activity.desc.az;
            document.getElementById('activityModalDuration').textContent = activity.duration[currentLanguage] || activity.duration.az;
            document.getElementById('activityModalDifficulty').textContent = activity.difficulty[currentLanguage] || activity.difficulty.az;
            document.getElementById('activityModalPrice').textContent = activity.price;
            document.getElementById('activityModalGroup').textContent = activity.group[currentLanguage] || activity.group.az;
            document.getElementById('activityModalRequirements').innerHTML = activity.requirements.map(req => 
                `<li>${req[currentLanguage] || req.az}</li>`
            ).join('');
            document.getElementById('activityModalEquipment').innerHTML = activity.equipment.map(eq => 
                `<span class="equipment-tag">${eq}</span>`
            ).join('');

            document.getElementById('activityModal').classList.add('active');
        }

        function closeActivityModal() {
            document.getElementById('activityModal').classList.remove('active');
        }
        document.getElementById('activityModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeActivityModal();
        });

        function openGuideModal(guideId) {
            const guide = guidesData[guideId];
            if (!guide) return;
            
            currentGuideId = guideId;

            document.getElementById('guideModalImage').src = guide.image;
            document.getElementById('guideModalName').textContent = guide.name;
            document.getElementById('guideModalRole').textContent = guide.role[currentLanguage] || guide.role.az;
            document.getElementById('guideModalExp').textContent = guide.experience;
            document.getElementById('guideModalTours').textContent = guide.tours;
            document.getElementById('guideModalRating').textContent = '⭐ ' + guide.rating;
            document.getElementById('guideModalBio').textContent = guide.bio[currentLanguage] || guide.bio.az;
            
            document.getElementById('guideModalCerts').innerHTML = guide.certs.map(cert => `<li>✓ ${cert}</li>`).join('');
            document.getElementById('guideModalLangs').innerHTML = guide.languages.map(lang => `<span class="lang-tag">${lang}</span>`).join('');

            document.getElementById('guideModal').classList.add('active');
        }

        function closeGuideModal() {
            document.getElementById('guideModal').classList.remove('active');
        }

        function openGuideModalFromTour() {
            if (currentTourId && toursData[currentTourId] && toursData[currentTourId].guide) {
                openGuideModal(toursData[currentTourId].guide);
            }
        }

        function openGuideModalFromMountain() {
            if (currentModalMountainId && mountainCardsData[currentModalMountainId] && mountainCardsData[currentModalMountainId].guide) {
                openGuideModal(mountainCardsData[currentModalMountainId].guide);
            }
        }

        const toursData = {
            'bazarduzu-expedition': {
                id: 'bazarduzu-expedition',
                name: 'Bazardüzü Ekspedisiyası',
                nameEn: 'Bazarduzu Expedition',
                icon: '🏔️',
                price: 1200,
                duration: '7 gün',
                group: '5-15 nəfər',
                difficulty: 'Mürəkkəb',
                location: 'Qusar rayonu, Azərbaycan',
                guide: 'elchin',
                description: 'Azərbaycanın ən hündür zirvəsi olan Bazardüzü dağına (4466 m) professional alpinizm ekspedisiyası. Bu tur təcrübəli alpinistlər və macəra həvəskarları üçün nəzərdə tutulub.',
                descriptionEn: 'Professional alpinism expedition to Mount Bazarduzu (4466 m), the highest peak in Azerbaijan. This tour is designed for experienced alpinists and adventure enthusiasts.',
                includes: [
                    'Professional dağ bələdçisi',
                    'Alpinizm avadanlığı',
                    'Çadır və yataq ləvazimatları',
                    'Bütün yeməklər',
                    'Bakı-Qusar transferi',
                    'Tibbi sığorta',
                    'İlk yardım dəsti'
                ],
                itinerary: [
                    { day: 1, title: 'Bakı - Qusar', desc: 'Səhər Bakıdan yola düşmə, Qusara çatma, gecələmə' },
                    { day: 2, title: 'Qusar - Baza düşərgə', desc: 'Piyada yürüş, 2500m-ə qalxış' },
                    { day: 3, title: 'Akklimatizasiya', desc: '3000m-ə qalxış və geri enmə' },
                    { day: 4, title: 'Yuxarı düşərgə', desc: '3800m yuxarı düşərgəyə keçid' },
                    { day: 5, title: 'Zirvə günü', desc: '4466m zirvəyə qalxış və enmə' },
                    { day: 6, title: 'Enmə', desc: 'Baza düşərgəyə enmə' },
                    { day: 7, title: 'Qayıdış', desc: 'Qusara və Bakıya qayıdış' }
                ]
            },
            'shahdag-winter': {
                id: 'shahdag-winter',
                name: 'Şahdağ Qış Turu',
                nameEn: 'Shahdag Winter Tour',
                icon: '⛷️',
                price: 450,
                duration: '3 gün',
                group: '2-20 nəfər',
                difficulty: 'Asan',
                location: 'Şahdağ Kurort, Qusar',
                guide: 'rashad',
                description: 'Azərbaycanın ən müasir qış kurortunda xizək və snowboard həyəcanı. Yeni başlayanlar üçün təlimlər, peşəkarlar üçün mürəkkəb pistlər.',
                descriptionEn: 'Skiing and snowboarding excitement at Azerbaijan\'s most modern winter resort. Training for beginners, challenging slopes for professionals.',
                includes: [
                    '3 gecəlik otel (4-5 ulduz)',
                    'Gündəlik səhər yeməyi',
                    '3 günlük lift bileti',
                    'Bakı-Şahdağ transferi',
                    'Xizək/snowboard icarəsi',
                    'Başlanğıc dərsi (istəyə görə)'
                ],
                itinerary: [
                    { day: 1, title: 'Gəliş', desc: 'Şahdağa gəliş, otelə yerləşmə, axşam azad' },
                    { day: 2, title: 'Xizək günü', desc: 'Tam gün xizək/snowboard, axşam spa' },
                    { day: 3, title: 'Qayıdış', desc: 'Səhər xizək, günortadan sonra Bakıya qayıdış' }
                ]
            },
            'khinaliq-trekking': {
                id: 'khinaliq-trekking',
                name: 'Xınalıq Trekkinqi',
                nameEn: 'Khinaliq Trekking',
                icon: '🥾',
                price: 350,
                duration: '3 gün',
                group: '4-12 nəfər',
                difficulty: 'Orta',
                location: 'Quba rayonu, Xınalıq',
                guide: 'leyla',
                description: 'Dünyanın ən qədim yaşayış məntəqələrindən biri olan Xınalıq kəndinə mədəni-trekking turu. 5000 illik tarix, unikal dil və ənənələr.',
                descriptionEn: 'Cultural-trekking tour to Khinaliq village, one of the oldest continuously inhabited settlements in the world. 5000 years of history, unique language and traditions.',
                includes: [
                    'Yerli evdə qonaqlama',
                    'Bütün yeməklər (milli mətbəx)',
                    'Professional bələdçi',
                    'Bakı-Xınalıq transferi',
                    'Mədəni tur və söhbətlər',
                    'Ənənəvi sənətkarlıq nümayişi'
                ],
                itinerary: [
                    { day: 1, title: 'Bakı - Xınalıq', desc: 'Səhər yola düşmə, Quba üzərindən Xınalığa, kənd turu' },
                    { day: 2, title: 'Trekking', desc: 'Dağ yürüşü, çoban düşərgələri, mağaralar' },
                    { day: 3, title: 'Mədəniyyət və qayıdış', desc: 'Sənətkarlıq, muzey, Bakıya qayıdış' }
                ]
            },
            'qobustan-tour': {
                id: 'qobustan-tour',
                name: 'Qobustan Günlük Tur',
                nameEn: 'Qobustan Day Tour',
                icon: '🌋',
                price: 80,
                duration: '1 gün',
                group: '2-15 nəfər',
                difficulty: 'Asan',
                location: 'Qobustan, Azərbaycan',
                guide: 'leyla',
                description: 'Qobustan Milli Parkına günlük tur. UNESCO Dünya İrs Siyahısına daxil olan qədim qayaüstü rəsmlər, palçıq vulkanları və unikal təbiət mənzərələri.',
                descriptionEn: 'Day tour to Gobustan National Park. Ancient rock art included in UNESCO World Heritage List, mud volcanoes and unique natural landscapes.',
                includes: [
                    'Professional bələdçi',
                    'Bakı-Qobustan transferi',
                    'Muzey giriş bileti',
                    'Qobustan Milli Parkı ziyarəti',
                    'Palçıq vulkanları ziyarəti',
                    'Qida və içki'
                ],
                itinerary: [
                    { day: 1, title: 'Qobustan turu', desc: 'Səhər Bakıdan yola düşmə, Qobustan Milli Parkı ziyarəti, qayaüstü rəsmlər, palçıq vulkanları, axşam Bakıya qayıdış' }
                ]
            },
            'babadag-pilgrimage': {
                id: 'babadag-pilgrimage',
                name: 'Babadağ Ziyarəti',
                nameEn: 'Babadag Pilgrimage',
                icon: '⛰️',
                price: 280,
                duration: '2 gün',
                group: '3-10 nəfər',
                difficulty: 'Orta',
                location: 'Quba rayonu, Babadağ',
                guide: 'leyla',
                description: 'Azərbaycanın müqəddəs sayılan dağlarından biri olan Babadağa ziyarət turu. Dağın zirvəsində qədim ibadətgah, təbiət mənzərələri və mənəvi atmosfer.',
                descriptionEn: 'Pilgrimage tour to Mount Babadag, one of the sacred mountains of Azerbaijan. Ancient shrine at the peak, natural landscapes and spiritual atmosphere.',
                includes: [
                    'Professional bələdçi',
                    'Bakı-Quba transferi',
                    'Yerli evdə qonaqlama',
                    'Bütün yeməklər',
                    'Dağ yürüşü avadanlığı',
                    'İlk yardım dəsti'
                ],
                itinerary: [
                    { day: 1, title: 'Bakı - Quba - Babadağ', desc: 'Səhər Bakıdan yola düşmə, Qubaya çatma, Babadağ ətəyinə yürüş, gecələmə' },
                    { day: 2, title: 'Zirvə ziyarəti və qayıdış', desc: 'Səhər zirvəyə qalxış, ibadətgah ziyarəti, enmə və Bakıya qayıdış' }
                ]
            },
            'tufandag-adventure': {
                id: 'tufandag-adventure',
                name: 'Tufandağ Macərası',
                nameEn: 'Tufandag Adventure',
                icon: '🚡',
                price: 120,
                duration: '1 gün',
                group: '2-15 nəfər',
                difficulty: 'Asan',
                location: 'Qəbələ rayonu, Tufandağ',
                guide: 'rashad',
                description: 'Qəbələ rayonundakı Tufandağ kurortuna macəralı günlük tur. Kanat yolu ilə dağ zirvəsinə qalxış, heyrətamiz mənzərələr, zipline və digər əyləncəli aktivitələr.',
                descriptionEn: 'Adventurous day tour to Tufandag resort in Gabala region. Cable car ride to mountain peak, stunning views, zipline and other fun activities.',
                includes: [
                    'Professional bələdçi',
                    'Bakı-Qəbələ transferi',
                    'Kanat yolu bileti',
                    'Zipline aktivitəsi',
                    'Dağ gəzintisi',
                    'Qida və içki',
                    'Fotolar'
                ],
                itinerary: [
                    { day: 1, title: 'Tufandağ macərası', desc: 'Səhər Bakıdan yola düşmə, Qəbələyə çatma, kanat yolu ilə zirvəyə qalxış, zipline, dağ gəzintisi, axşam Bakıya qayıdış' }
                ]
            },
            'photo-expedition': {
                id: 'photo-expedition',
                name: 'Fotoqrafiya Ekspedisiyası',
                nameEn: 'Photography Expedition',
                icon: '📸',
                price: 650,
                duration: '3 gün',
                group: '3-8 nəfər',
                difficulty: 'Orta',
                location: 'Qusar, Qəbələ, Quba rayonları',
                guide: 'elchin',
                description: 'Professional fotoqraflarla birlikdə Azərbaycanın ən gözəl dağ mənzərələrini tutmaq üçün ekspedisiya. Günəş doğuşu və batması, ulduzlu səma, dağ gölləri və daha çox.',
                descriptionEn: 'Expedition to capture the most beautiful mountain landscapes of Azerbaijan with professional photographers. Sunrise and sunset, starry sky, mountain lakes and more.',
                includes: [
                    'Professional fotoqraf bələdçi',
                    'Fotoqrafiya məsləhətləri',
                    'Bütün transferlər',
                    '2 gecəlik qonaqlama',
                    'Bütün yeməklər',
                    'Foto avadanlığı icarəsi',
                    'Post-processing dərsləri'
                ],
                itinerary: [
                    { day: 1, title: 'Bakı - Şahdağ', desc: 'Səhər Bakıdan yola düşmə, Şahdağa çatma, günəş batması fotosessiyası, gecələmə' },
                    { day: 2, title: 'Günəş doğuşu və dağ gəzintisi', desc: 'Səhər günəş doğuşu fotosessiyası, dağ gəzintisi, təbiət fotoları, axşam ulduzlu səma fotosessiyası' },
                    { day: 3, title: 'Qəbələ və qayıdış', desc: 'Göygöl gölü fotosessiyası, Qəbələ turu, axşam Bakıya qayıdış' }
                ]
            },
            'extreme-climbing': {
                id: 'extreme-climbing',
                name: 'Ekstremal Alpinizm',
                nameEn: 'Extreme Climbing',
                icon: '🧗',
                price: 1500,
                duration: '5 gün',
                group: '3-6 nəfər',
                difficulty: 'Mürəkkəb',
                location: 'Bazardüzü, Şahdağ',
                guide: 'elchin',
                description: 'Təcrübəli alpinistlər üçün ekstremal alpinizm turu. Çətin marşrutlar, qaya dırmanışı, buz dırmanışı və professional alpinizm texnikaları.',
                descriptionEn: 'Extreme climbing tour for experienced alpinists. Challenging routes, rock climbing, ice climbing and professional alpinism techniques.',
                includes: [
                    'Professional alpinizm bələdçisi',
                    'Bütün alpinizm avadanlığı',
                    'Çadır və yataq ləvazimatları',
                    'Bütün yeməklər',
                    'Bakı-dağ transferi',
                    'Tibbi sığorta',
                    'İlk yardım dəsti',
                    'Alpinizm sertifikatı'
                ],
                itinerary: [
                    { day: 1, title: 'Bakı - Baza düşərgə', desc: 'Səhər Bakıdan yola düşmə, baza düşərgəsinə çatma, avadanlıq yoxlaması' },
                    { day: 2, title: 'Qaya dırmanışı', desc: 'Qaya dırmanışı təlimləri, texnika məşqləri, akklimatizasiya' },
                    { day: 3, title: 'Buz dırmanışı', desc: 'Buz dırmanışı təlimləri, buz baltası və crampon istifadəsi' },
                    { day: 4, title: 'Zirvə cəhdi', desc: 'Əsas zirvəyə qalxış cəhdi, ekstremal marşrut' },
                    { day: 5, title: 'Qayıdış', desc: 'Düşərgəyə enmə, avadanlıq toplama, Bakıya qayıdış' }
                ]
            }
        };

        let currentTourId = null;

        function openTourModal(tourId) {
            const tour = toursData[tourId];
            if (!tour) {
                console.warn('Tour not found:', tourId);
                return;
            }
            
            currentTourId = tourId;
            
            document.getElementById('tourModalHeader').innerHTML = `
                <span class="tour-modal-icon">${tour.icon}</span>
                <h2>${currentLanguage === 'az' ? tour.name : tour.nameEn}</h2>
            `;
            document.getElementById('tourModalDescription').textContent = currentLanguage === 'az' ? tour.description : tour.descriptionEn;
            document.getElementById('tourModalDuration').textContent = tour.duration;
            document.getElementById('tourModalGroup').textContent = tour.group;
            document.getElementById('tourModalDifficulty').textContent = tour.difficulty;
            document.getElementById('tourModalLocation').textContent = tour.location;
            document.getElementById('tourModalPrice').textContent = `₼${tour.price}`;
            document.getElementById('tourModalIncludes').innerHTML = tour.includes.map(item => `<li>✓ ${item}</li>`).join('');
            document.getElementById('tourModalItinerary').innerHTML = tour.itinerary.map(day => `
                <div class="itinerary-item">
                    <span class="day-badge">${currentLanguage === 'az' ? 'Gün' : 'Day'} ${day.day}</span>
                    <div class="itinerary-content">
                        <strong>${day.title}</strong>
                        <p>${day.desc}</p>
                    </div>
                </div>
            `).join('');
            const guideSection = document.getElementById('tourGuideSection');
            if (tour.guide && guidesData[tour.guide]) {
                const guide = guidesData[tour.guide];
                document.getElementById('tourGuideImage').src = guide.image;
                document.getElementById('tourGuideName').textContent = guide.name;
                document.getElementById('tourGuideRole').textContent = guide.role[currentLanguage] || guide.role.az;
                document.getElementById('tourGuideExp').textContent = guide.experience;
                document.getElementById('tourGuideRating').textContent = guide.rating;
                guideSection.style.display = 'block';
            } else {
                guideSection.style.display = 'none';
            }
            
            document.getElementById('tourInfoModal').classList.add('active');
        }

        function closeTourModal() {
            document.getElementById('tourInfoModal').classList.remove('active');
        }

        function openTourBookingFromModal() {
            closeTourModal();
            openTourBookingModal(currentTourId);
        }

        function openTourInfoModal(tourId) {
            openTourModal(tourId);
        }

        const mountainCardsData = {
            'bazarduzu': {
                id: 'bazarduzu',
                name: 'Bazardüzü',
                altitude: '4466',
                difficulty: 'Mürəkkəb',
                difficultyClass: 'hard',
                location: 'Qusar rayonu, Azərbaycan',
                description: 'Bazardüzü — Azərbaycanın ən hündür zirvəsidir. Böyük Qafqaz silsiləsinin şərq hissəsində, Azərbaycan-Rusiya sərhədində yerləşir. Adı "bazar yeri" mənasını verir, çünki qədimdə burada ticarət karvanları keçirdi. Professional alpinistlər üçün əsl sınaq meydanıdır.',
                bestTime: 'İyun - Sentyabr',
                groupSize: '5-15 nəfər',
                transport: 'Avtobus, Jeep',
                price: '₼1200-dən',
                activities: ['Alpinizm', 'Trekking', 'Foto-tur', 'Düşərgə'],
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
                coords: [41.2208, 47.8517],
                guide: 'elchin'
            },
            'shahdag': {
                id: 'shahdag',
                name: 'Şahdağ',
                altitude: '4243',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                location: 'Qusar rayonu, Azərbaycan',
                description: 'Şahdağ — Azərbaycanın ən məşhur qış kurortudur. Müasir xizək pistləri, lüks otellər və heyrətamiz dağ mənzərələri ilə tanınır. Yay mövsümündə trekking və paraqlaydinq üçün ideal yerdir.',
                bestTime: 'Bütün il',
                groupSize: '2-20 nəfər',
                transport: 'Avtobus, Transfer',
                price: '₼450-dən',
                activities: ['Xizək', 'Snowboard', 'Paraqlaydinq', 'Trekking', 'Spa'],
                image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800',
                guide: 'rashad',
                coords: [41.2758, 48.1342]
            },
            'tufandag': {
                id: 'tufandag',
                name: 'Tufandağ',
                altitude: '4191',
                difficulty: 'Asan',
                difficultyClass: 'easy',
                location: 'Qəbələ rayonu, Azərbaycan',
                description: 'Tufandağ — Qəbələdə yerləşən müasir turizm mərkəzidir. Azərbaycanın ən uzun kanat yolu burada yerləşir. Ətrafda gözəl meşələr, şəlalələr və tarixi abidələr var. Ailələr üçün ideal istirahət yeridir.',
                bestTime: 'Bütün il',
                groupSize: '1-30 nəfər',
                transport: 'Avtobus, Taksi',
                price: '₼200-dən',
                activities: ['Kanat yolu', 'Xizək', 'Zipline', 'At gəzintisi'],
                image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
                coords: [41.0053, 47.8625],
                guide: 'rashad'
            },
            'babadag': {
                id: 'babadag',
                name: 'Babadağ',
                altitude: '3629',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                location: 'Quba rayonu, Azərbaycan',
                description: 'Babadağ — Azərbaycanda müqəddəs sayılan dağlardan biridir. Hər il minlərlə zəvvar buraya ziyarətə gəlir. Dağın zirvəsində qədim ibadətgah yerləşir. Təbiət mənzərələri və mənəvi atmosfer turistləri cəlb edir.',
                bestTime: 'May - Oktyabr',
                groupSize: '5-20 nəfər',
                transport: 'Avtobus, Jeep',
                price: '₼300-dən',
                activities: ['Trekking', 'Ziyarət', 'Foto-tur', 'Mədəni tur'],
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
                coords: [41.1275, 48.3517],
                guide: 'leyla'
            },
            'kapaz': {
                id: 'kapaz',
                name: 'Kəpəz',
                altitude: '3066',
                difficulty: 'Orta',
                difficultyClass: 'medium',
                location: 'Göygöl rayonu, Azərbaycan',
                description: 'Kəpəz dağı Göygöl Milli Parkında yerləşir. 1139-cu il zəlzələsi nəticəsində dağın bir hissəsi uçaraq Göygöl gölünü yaratmışdır. Əfsanəvi gözəlliyi və tarixi ilə turistləri cəlb edir.',
                bestTime: 'May - Sentyabr',
                groupSize: '5-15 nəfər',
                transport: 'Avtobus, Jeep',
                price: '₼250-dən',
                activities: ['Trekking', 'Foto-tur', 'Düşərgə', 'Göl turu'],
                image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
                coords: [40.5889, 46.3275],
                guide: 'leyla'
            },
            'murovdag': {
                id: 'murovdag',
                name: 'Murovdağ',
                altitude: '3724',
                difficulty: 'Mürəkkəb',
                difficultyClass: 'hard',
                location: 'Kiçik Qafqaz, Azərbaycan',
                description: 'Murovdağ — Kiçik Qafqaz silsiləsinin ən hündür zirvəsidir. Nadir flora və fauna növlərinə ev sahibliyi edir. Professional alpinistlər üçün əla marşrutlar təklif edir.',
                bestTime: 'İyun - Avqust',
                groupSize: '5-10 nəfər',
                transport: 'Jeep, Piyada',
                price: '₼800-dən',
                activities: ['Alpinizm', 'Trekking', 'Foto-tur', 'Elm ekspedisiyası'],
                image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
                coords: [40.4167, 46.5833],
                guide: 'elchin'
            },
            'qobustan': {
                id: 'qobustan',
                name: 'Böyükdaş',
                altitude: '400',
                difficulty: 'Asan',
                difficultyClass: 'easy',
                location: 'Qobustan, Azərbaycan',
                description: 'Böyükdaş — Qobustan Milli Parkında yerləşən, 40.000 ildən çox yaşı olan qaya rəsmləri ilə məşhur ərazidir. UNESCO Dünya İrs Siyahısına daxildir. Qədim insanların həyatı haqqında unikal məlumat verir.',
                bestTime: 'Bütün il',
                groupSize: '5-30 nəfər',
                transport: 'Avtobus, Avtomobil',
                price: '₼50-dən',
                activities: ['Ekskursiya', 'Foto-tur', 'Tarix turu', 'Arxeologiya'],
                image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800',
                coords: [40.0908, 49.3731],
                guide: 'leyla'
            },
            'qizilqaya': {
                id: 'qizilqaya',
                name: 'Qızılqaya',
                altitude: '3726',
                difficulty: 'Mürəkkəb',
                difficultyClass: 'hard',
                location: 'Böyük Qafqaz, Azərbaycan',
                description: 'Qızılqaya — adını qızılı rəngli qayalarından almış dağdır. Gün batımı zamanı qayalar qızıl rəngə boyanır. Alpinistlər və fotoqraflar üçün əla məkandır.',
                bestTime: 'İyun - Sentyabr',
                groupSize: '5-12 nəfər',
                transport: 'Jeep, Piyada',
                price: '₼700-dən',
                activities: ['Alpinizm', 'Trekking', 'Foto-tur', 'Düşərgə'],
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
                coords: [41.1500, 47.9167],
                guide: 'elchin'
            }
        };

        let currentModalMountainId = null;
        let mountainsExpanded = false;
        function toggleMoreMountains() {
            mountainsExpanded = !mountainsExpanded;
            const hiddenMountains = document.querySelectorAll('.hidden-mountain');
            const btn = document.getElementById('showMoreMountainsBtn');
            const icon = btn.querySelector('.show-more-icon');
            const text = btn.querySelector('span:first-child');
            
            hiddenMountains.forEach(card => {
                if (mountainsExpanded) {
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            });
            
            if (mountainsExpanded) {
                text.setAttribute('data-lang-az', 'Daha Az Gör');
                text.setAttribute('data-lang-en', 'Show Less');
                text.textContent = currentLanguage === 'az' ? 'Daha Az Gör' : 'Show Less';
                icon.textContent = '▲';
            } else {
                text.setAttribute('data-lang-az', 'Daha Çox Gör');
                text.setAttribute('data-lang-en', 'Show More');
                text.textContent = currentLanguage === 'az' ? 'Daha Çox Gör' : 'Show More';
                icon.textContent = '▼';
            }
        }

        function openMountainModal(mountainId) {
            const mountain = mountainCardsData[mountainId];
            if (!mountain) return;
            
            currentModalMountainId = mountainId;
            document.getElementById('modalMountainImage').style.backgroundImage = `url('${mountain.image}')`;
            document.getElementById('modalMountainName').textContent = mountain.name;
            document.getElementById('modalMountainLocation').textContent = '📍 ' + mountain.location;
            document.getElementById('modalMountainAltitude').textContent = mountain.altitude;
            document.getElementById('modalMountainDescription').textContent = mountain.description;
            document.getElementById('modalBestTime').textContent = mountain.bestTime;
            document.getElementById('modalGroupSize').textContent = mountain.groupSize;
            document.getElementById('modalTransport').textContent = mountain.transport;
            document.getElementById('modalPrice').textContent = mountain.price;
            const diffBadge = document.querySelector('#modalDifficulty .difficulty-badge');
            diffBadge.textContent = mountain.difficulty;
            diffBadge.className = `difficulty-badge ${mountain.difficultyClass}`;
            document.getElementById('modalActivities').innerHTML = mountain.activities.map(act => 
                `<span class="activity-tag clickable" onclick="openActivityModal('${act}')">${act}</span>`
            ).join('');
            const guideSection = document.getElementById('modalGuideSection');
            if (mountain.guide && guidesData[mountain.guide]) {
                const guide = guidesData[mountain.guide];
                document.getElementById('modalGuideImage').src = guide.image;
                document.getElementById('modalGuideName').textContent = guide.name;
                document.getElementById('modalGuideRole').textContent = guide.role[currentLanguage] || guide.role.az;
                document.getElementById('modalGuideExp').textContent = guide.experience;
                document.getElementById('modalGuideRating').textContent = guide.rating;
                guideSection.style.display = 'block';
            } else {
                guideSection.style.display = 'none';
            }
            document.getElementById('modalDetailsBtn').href = `mountain-details.html?id=${mountain.id}`;
            document.getElementById('modalGoogleMapsBtn').href = `https://www.google.com/maps/search/?api=1&query=${mountain.coords[0]},${mountain.coords[1]}`;
            updateModalFavoriteBtn(mountain);
            loadMountainReviews(mountainId);
            document.getElementById('mountainModal').classList.add('active');
        }

        function closeMountainModal() {
            document.getElementById('mountainModal').classList.remove('active');
        }

        function updateModalFavoriteBtn(mountain) {
            const user = getCurrentUser();
            const btn = document.getElementById('modalFavoriteBtn');
            
            if (!user) {
                btn.textContent = '🤍';
                btn.classList.remove('is-favorite');
                return;
            }
            
            const favorites = user.favorites || [];
            const isFavorite = favorites.some(f => f.id === mountain.id);
            
            btn.textContent = isFavorite ? '❤️' : '🤍';
            btn.classList.toggle('is-favorite', isFavorite);
        }

        function toggleModalFavorite() {
            const user = getCurrentUser();
            
            if (!user) {
                showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə etmək üçün giriş edin' : 'Login to add to favorites', 'error');
                closeMountainModal();
                openLoginModal();
                return;
            }
            
            const mountain = mountainCardsData[currentModalMountainId];
            if (!mountain) return;
            
            const favorites = user.favorites || [];
            const existingIndex = favorites.findIndex(f => f.id === mountain.id);
            
            if (existingIndex !== -1) {
                favorites.splice(existingIndex, 1);
                showNotification(currentLanguage === 'az' ? 'Sevimlilərdən silindi' : 'Removed from favorites', 'success');
            } else {
                favorites.push({
                    id: mountain.id,
                    name: mountain.name,
                    altitude: mountain.altitude + ' m',
                    country: 'Azərbaycan',
                    image: mountain.image,
                    type: 'mountain'
                });
                showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə edildi' : 'Added to favorites', 'success');
            }
            
            user.favorites = favorites;
            updateCurrentUser(user);
            
            const users = getUsers();
            const userIndex = users.findIndex(u => u.id === user.id);
            if (userIndex !== -1) {
                users[userIndex].favorites = favorites;
                saveUsers(users);
            }
            
            updateModalFavoriteBtn(mountain);
        }

        function showOnMap() {
            const mountain = mountainCardsData[currentModalMountainId];
            if (!mountain) return;
            
            closeMountainModal();
            document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const mapMountain = mountains.find(m => m.id === mountain.id);
                if (mapMountain) {
                    map.flyTo(mapMountain.coords, 10, { duration: 1.5 });
                    showMountainInfo(mapMountain);
                }
            }, 800);
        }
        document.getElementById('mountainModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeMountainModal();
        });

        const searchData = {
            mountains: [
                { id: 'bazarduzu', name: 'Bazardüzü', type: 'mountain', altitude: '4466 m', location: 'Qusar' },
                { id: 'shahdag', name: 'Şahdağ', type: 'mountain', altitude: '4243 m', location: 'Qusar' },
                { id: 'tufandag', name: 'Tufandağ', type: 'mountain', altitude: '4191 m', location: 'Qəbələ' },
                { id: 'babadag', name: 'Babadağ', type: 'mountain', altitude: '3629 m', location: 'Quba' },
                { id: 'khinaliq', name: 'Xınalıq', type: 'mountain', altitude: '2350 m', location: 'Quba' },
                { id: 'qobustan', name: 'Qobustan', type: 'mountain', altitude: '400 m', location: 'Qobustan' }
            ],
            tours: [
                { id: 'bazarduzu-expedition', name: 'Bazardüzü Ekspedisiyası', type: 'tour', price: '₼1200', duration: '7 gün' },
                { id: 'shahdag-winter', name: 'Şahdağ Qış Turu', type: 'tour', price: '₼450', duration: '3 gün' },
                { id: 'khinaliq-trekking', name: 'Xınalıq Trekkinqi', type: 'tour', price: '₼350', duration: '3 gün' }
            ]
        };

        let currentSearchFilter = 'all';

        function openSearchModal() {
            document.getElementById('searchModal').classList.add('active');
            document.getElementById('searchInput').focus();
        }

        function closeSearchModal() {
            document.getElementById('searchModal').classList.remove('active');
            document.getElementById('searchInput').value = '';
            document.getElementById('searchResults').innerHTML = `
                <div class="search-placeholder">
                    <span>🔍</span>
                    <p>${currentLanguage === 'az' ? 'Axtarış nəticələri burada görünəcək' : 'Search results will appear here'}</p>
                </div>
            `;
        }
        
        // Global scope-a əlavə et ki, HTML-dən çağırıla bilsin
        window.closeSearchModal = closeSearchModal;

        function performSearch(query) {
            if (!query || query.length < 2) {
                document.getElementById('searchResults').innerHTML = `
                    <div class="search-placeholder">
                        <span>🔍</span>
                        <p>${currentLanguage === 'az' ? 'Ən azı 2 simvol daxil edin' : 'Enter at least 2 characters'}</p>
                    </div>
                `;
                return;
            }

            const lowerQuery = query.toLowerCase();
            let results = [];
            if (currentSearchFilter === 'all' || currentSearchFilter === 'mountains') {
                const mountainResults = searchData.mountains.filter(m => 
                    m.name.toLowerCase().includes(lowerQuery) || 
                    m.location.toLowerCase().includes(lowerQuery)
                );
                results = results.concat(mountainResults);
            }
            if (currentSearchFilter === 'all' || currentSearchFilter === 'tours') {
                const tourResults = searchData.tours.filter(t => 
                    t.name.toLowerCase().includes(lowerQuery)
                );
                results = results.concat(tourResults);
            }

            displaySearchResults(results, query);
        }

        function displaySearchResults(results, query) {
            const container = document.getElementById('searchResults');

            if (results.length === 0) {
                container.innerHTML = `
                    <div class="search-no-results">
                        <span>😕</span>
                        <p>${currentLanguage === 'az' ? `"${query}" üçün nəticə tapılmadı` : `No results found for "${query}"`}</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = results.map(item => `
                <div class="search-result-item" onclick="${item.type === 'mountain' ? `closeSearchModal(); openMountainModal('${item.id}')` : `closeSearchModal(); openTourModal('${item.id}')`}">
                    <span class="result-icon">${item.type === 'mountain' ? '🏔️' : '🎫'}</span>
                    <div class="result-info">
                        <h4>${item.name}</h4>
                        <p>${item.type === 'mountain' ? `${item.altitude} • ${item.location}` : `${item.price} • ${item.duration}`}</p>
                    </div>
                    <span class="result-arrow">→</span>
                </div>
            `).join('');
        }
        document.getElementById('searchToggleBtn')?.addEventListener('click', openSearchModal);
        document.getElementById('searchCloseBtn')?.addEventListener('click', closeSearchModal);
        document.getElementById('searchModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeSearchModal();
        });

        document.getElementById('searchInput')?.addEventListener('input', function(e) {
            const query = e.target.value;
            document.getElementById('searchClearBtn').style.display = query ? 'block' : 'none';
            performSearch(query);
        });

        document.getElementById('searchClearBtn')?.addEventListener('click', function() {
            document.getElementById('searchInput').value = '';
            this.style.display = 'none';
            performSearch('');
            document.getElementById('searchInput').focus();
        });

        document.querySelectorAll('.search-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.search-filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentSearchFilter = this.dataset.filter;
                performSearch(document.getElementById('searchInput').value);
            });
        });
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearchModal();
            }
            if (e.key === 'Escape' && document.getElementById('searchModal').classList.contains('active')) {
                closeSearchModal();
            }
        });

        const REVIEWS_KEY = 'peakexplorer_reviews';

        function getReviews() {
            const reviews = localStorage.getItem(REVIEWS_KEY);
            return reviews ? JSON.parse(reviews) : {};
        }

        function saveReviews(reviews) {
            localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
        }

        function getMountainReviews(mountainId) {
            const allReviews = getReviews();
            return allReviews[mountainId] || [];
        }

        function loadMountainReviews(mountainId) {
            const reviews = getMountainReviews(mountainId);
            const container = document.getElementById('modalReviewsList');
            
            if (reviews.length === 0) {
                container.innerHTML = `
                    <div class="no-reviews">
                        <p>${currentLanguage === 'az' ? 'Hələ rəy yoxdur. İlk rəyi siz yazın!' : 'No reviews yet. Be the first to write one!'}</p>
                    </div>
                `;
                document.getElementById('modalOverallRating').textContent = '-';
                document.getElementById('modalOverallStars').textContent = '☆☆☆☆☆';
                document.getElementById('modalReviewCount').textContent = `(0 ${currentLanguage === 'az' ? 'rəy' : 'reviews'})`;
                return;
            }
            const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
            const fullStars = Math.round(avgRating);
            
            document.getElementById('modalOverallRating').textContent = avgRating;
            document.getElementById('modalOverallStars').textContent = '⭐'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
            document.getElementById('modalReviewCount').textContent = `(${reviews.length} ${currentLanguage === 'az' ? 'rəy' : 'reviews'})`;
            const displayReviews = reviews.slice(-3).reverse();
            container.innerHTML = displayReviews.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <span class="reviewer-avatar">👤</span>
                            <div>
                                <strong>${review.userName}</strong>
                                <span class="review-date">${review.visitDate || ''}</span>
                            </div>
                        </div>
                        <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
                    </div>
                    <h5 class="review-title">${review.title}</h5>
                    <p class="review-text">${review.text}</p>
                    <span class="travel-type">${getTravelTypeLabel(review.travelType)}</span>
                </div>
            `).join('');
        }

        function getTravelTypeLabel(type) {
            const labels = {
                'solo': currentLanguage === 'az' ? '👤 Tək' : '👤 Solo',
                'couple': currentLanguage === 'az' ? '💑 Cütlük' : '💑 Couple',
                'family': currentLanguage === 'az' ? '👨‍👩‍👧 Ailə' : '👨‍👩‍👧 Family',
                'friends': currentLanguage === 'az' ? '👥 Dostlar' : '👥 Friends',
                'group': currentLanguage === 'az' ? '🧑‍🤝‍🧑 Qrup' : '🧑‍🤝‍🧑 Group'
            };
            return labels[type] || type;
        }

        let selectedStarRating = 0;

        function openReviewModal() {
            const user = getCurrentUser();
            
            if (!user) {
                showNotification(currentLanguage === 'az' ? 'Rəy yazmaq üçün giriş edin' : 'Login to write a review', 'error');
                closeMountainModal();
                openLoginModal();
                return;
            }
            
            const mountain = mountainCardsData[currentModalMountainId];
            if (!mountain) return;
            
            document.getElementById('reviewMountainName').textContent = mountain.name;
            document.getElementById('reviewForm').reset();
            selectedStarRating = 0;
            updateStarDisplay();
            
            document.getElementById('reviewModal').classList.add('active');
        }

        function closeReviewModal() {
            document.getElementById('reviewModal').classList.remove('active');
        }

        function updateStarDisplay() {
            document.querySelectorAll('#starRating .star').forEach((star, index) => {
                star.textContent = index < selectedStarRating ? '★' : '☆';
                star.classList.toggle('selected', index < selectedStarRating);
            });
            document.getElementById('selectedRating').value = selectedStarRating;
        }
        document.querySelectorAll('#starRating .star').forEach(star => {
            star.addEventListener('click', function() {
                selectedStarRating = parseInt(this.dataset.rating);
                updateStarDisplay();
            });
            
            star.addEventListener('mouseenter', function() {
                const rating = parseInt(this.dataset.rating);
                document.querySelectorAll('#starRating .star').forEach((s, i) => {
                    s.textContent = i < rating ? '★' : '☆';
                });
            });
            
            star.addEventListener('mouseleave', function() {
                updateStarDisplay();
            });
        });
        document.getElementById('reviewForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const errorEl = document.getElementById('reviewError');
            
            if (selectedStarRating === 0) {
                errorEl.textContent = currentLanguage === 'az' ? 'Zəhmət olmasa ulduz seçin' : 'Please select a star rating';
                return;
            }
            
            const user = getCurrentUser();
            const mountain = mountainCardsData[currentModalMountainId];
            
            const review = {
                id: Date.now(),
                mountainId: currentModalMountainId,
                userId: user.id,
                userName: user.name,
                rating: selectedStarRating,
                title: document.getElementById('reviewTitle').value,
                text: document.getElementById('reviewText').value,
                visitDate: document.getElementById('visitDate').value,
                travelType: document.getElementById('travelType').value,
                createdAt: new Date().toISOString()
            };
            const allReviews = getReviews();
            if (!allReviews[currentModalMountainId]) {
                allReviews[currentModalMountainId] = [];
            }
            allReviews[currentModalMountainId].push(review);
            saveReviews(allReviews);
            closeReviewModal();
            loadMountainReviews(currentModalMountainId);
            showNotification(currentLanguage === 'az' ? 'Rəyiniz əlavə edildi!' : 'Your review has been added!', 'success');
        });
        document.getElementById('reviewModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeReviewModal();
        });

        function openTourBookingModal(tourId) {
            const tour = toursData[tourId];
            if (!tour) return;
            
            currentTourId = tourId;
            
            document.getElementById('bookingTourName').textContent = currentLanguage === 'az' ? tour.name : tour.nameEn;
            document.getElementById('tourSummaryName').textContent = currentLanguage === 'az' ? tour.name : tour.nameEn;
            const today = new Date();
            const minDate = new Date(today);
            minDate.setDate(minDate.getDate() + 7);
            document.getElementById('tourDate').min = minDate.toISOString().split('T')[0];
            document.getElementById('tourDate').value = minDate.toISOString().split('T')[0];
            
            updateTourSummary();
            
            document.getElementById('tourBookingStep1').style.display = 'block';
            document.getElementById('tourBookingStep2').style.display = 'none';
            document.getElementById('tourBookingStep3').style.display = 'none';
            document.getElementById('tourBookingModal').classList.add('active');
        }
        
        let currentBookingData = null;
        
        function goBackToBookingForm() {
            document.getElementById('tourBookingStep1').style.display = 'block';
            document.getElementById('tourBookingStep2').style.display = 'none';
        }

        function closeTourBookingModal() {
            document.getElementById('tourBookingModal').classList.remove('active');
        }

        function updateTourSummary() {
            const tour = toursData[currentTourId];
            if (!tour) return;
            
            const participants = parseInt(document.getElementById('tourParticipants').value);
            const basePrice = tour.price * participants;
            const user = getCurrentUser();
            let discount = 0;
            let finalTotal = basePrice;
            const discountRow = document.getElementById('discountRow');
            
            if (user && user.firstTripDiscount && user.firstTripDiscount.active && !user.firstTripDiscount.used) {
                discount = Math.round(basePrice * (user.firstTripDiscount.percentage / 100));
                finalTotal = basePrice - discount;
                discountRow.style.display = 'flex';
                document.getElementById('tourSummaryDiscount').textContent = `-₼${discount}`;
            } else {
                discountRow.style.display = 'none';
            }
            
            document.getElementById('tourSummaryParticipants').textContent = `${participants} nəfər`;
            document.getElementById('tourSummaryPrice').textContent = `₼${basePrice}`;
            document.getElementById('tourSummaryTotal').textContent = `₼${finalTotal}`;
        }
        document.getElementById('tourParticipants')?.addEventListener('change', updateTourSummary);

        document.getElementById('tourBookingForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
             
            const tour = toursData[currentTourId];
            if (!tour) return;
            
            const participants = parseInt(document.getElementById('tourParticipants').value) || 1;
            
            const basePrice = tour.price * participants;
            const orderNumber = 'PE-' + Date.now().toString().slice(-6);
            const user = getCurrentUser();
            let discount = 0;
            let finalTotal = basePrice;
            let discountUsed = false;
            
            if (user && user.firstTripDiscount && user.firstTripDiscount.active && !user.firstTripDiscount.used) {
                discount = Math.round(basePrice * (user.firstTripDiscount.percentage / 100));
                finalTotal = basePrice - discount;
                discountUsed = true;
                markDiscountAsUsed(user.id);
            }
            
            const bookingData = {
                tourId: currentTourId,
                tourName: tour.name,
                date: document.getElementById('tourDate').value,
                participants: participants,
                name: document.getElementById('tourGuestName').value,
                email: document.getElementById('tourGuestEmail').value,
                phone: document.getElementById('tourGuestPhone').value,
                notes: document.getElementById('tourNotes').value,
                basePrice: basePrice,
                discount: discount,
                total: finalTotal,
                discountUsed: discountUsed,
                orderNumber: orderNumber
            };
            
            // Don't save yet - wait for payment
            // saveTourBooking will be called after payment is completed
            currentBookingData = bookingData;
            
            // Update payment step with booking info
            const paymentTourNameEl = document.getElementById('paymentTourName');
            const paymentParticipantsEl = document.getElementById('paymentParticipants');
            const paymentAmountEl = document.getElementById('paymentAmount');
            
            if (paymentTourNameEl) paymentTourNameEl.textContent = currentLanguage === 'az' ? tour.name : tour.nameEn;
            if (paymentParticipantsEl) paymentParticipantsEl.textContent = `${participants} nəfər`;
            if (paymentAmountEl) paymentAmountEl.textContent = `₼${finalTotal}`;
            
            // Show payment step
            const step1 = document.getElementById('tourBookingStep1');
            const step2 = document.getElementById('tourBookingStep2');
            const step3 = document.getElementById('tourBookingStep3');
            
            if (step1) step1.style.display = 'none';
            if (step2) {
                step2.style.display = 'block';
                // Scroll to top of modal
                step2.scrollTop = 0;
            }
            if (step3) step3.style.display = 'none';
        });
        
        // Payment form handler
        document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';
            const cardNumber = document.getElementById('cardNumber')?.value.trim() || '';
            const cardExpiry = document.getElementById('cardExpiry')?.value.trim() || '';
            const cardCVV = document.getElementById('cardCVV')?.value.trim() || '';
            const cardName = document.getElementById('cardName')?.value.trim() || '';
            
            // Basic validation only for card payment
            if (paymentMethod === 'card') {
                if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
                    showNotification(currentLanguage === 'az' ? 'Zəhmət olmasa bütün ödəniş məlumatlarını daxil edin' : 'Please enter all payment information', 'error');
                    return;
                }
            }
            
            // Save booking with payment info
            if (currentBookingData) {
                currentBookingData.paymentMethod = paymentMethod;
                if (paymentMethod === 'card' && cardNumber) {
                    currentBookingData.cardLast4 = cardNumber.slice(-4);
                }
                saveTourBooking(currentBookingData);
                
                // Show success message
                const successMessage = currentBookingData.discountUsed 
                    ? (currentLanguage === 'az' ? '🎉 Ödəniş tamamlandı! İlk gediş endiriminiz tətbiq edildi!' : '🎉 Payment completed! Your first trip discount has been applied!')
                    : (currentLanguage === 'az' ? '✅ Ödəniş uğurla tamamlandı!' : '✅ Payment completed successfully!');
                
                showNotification(successMessage, 'success');
                
                // Close modal after a short delay
                setTimeout(() => {
                    closeTourBookingModal();
                }, 500);
            }
        });
        
        // Payment method change handler
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const cashNote = document.getElementById('cashPaymentNote');
                const cardFields = document.querySelectorAll('#cardNumber, #cardExpiry, #cardCVV, #cardName');
                
                if (this.value === 'cash') {
                    cashNote.style.display = 'block';
                    cardFields.forEach(field => field.required = false);
                } else {
                    cashNote.style.display = 'none';
                    cardFields.forEach(field => field.required = true);
                }
            });
        });
        
        // Format card number
        document.getElementById('cardNumber')?.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
        
        // Format expiry date
        document.getElementById('cardExpiry')?.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
        
        // Only numbers for CVV
        document.getElementById('cardCVV')?.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
        
        function markDiscountAsUsed(userId) {
            const users = getUsers();
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex !== -1) {
                users[userIndex].firstTripDiscount = {
                    ...users[userIndex].firstTripDiscount,
                    used: true,
                    usedAt: new Date().toISOString()
                };
                saveUsers(users);
                const currentUser = getCurrentUser();
                if (currentUser && currentUser.id === userId) {
                    currentUser.firstTripDiscount = users[userIndex].firstTripDiscount;
                    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
                }
            }
        }

        function saveTourBooking(bookingData) {
            const currentUser = localStorage.getItem(CURRENT_USER_KEY);
            if (currentUser) {
                const user = JSON.parse(currentUser);
                const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
                
                const booking = {
                    id: bookingData.orderNumber,
                    tourName: bookingData.tourName,
                    date: new Date(bookingData.date).toLocaleDateString('az-AZ'),
                    participants: bookingData.participants,
                    basePrice: bookingData.basePrice,
                    discount: bookingData.discount,
                    price: bookingData.total,
                    discountUsed: bookingData.discountUsed,
                    status: 'confirmed',
                    createdAt: new Date().toISOString()
                };
                
                user.bookings = user.bookings || [];
                user.bookings.push(booking);
                
                localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
                
                const userIndex = users.findIndex(u => u.id === user.id);
                if (userIndex !== -1) {
                    users[userIndex].bookings = user.bookings;
                    localStorage.setItem(USERS_KEY, JSON.stringify(users));
                }
            }
        }
        document.getElementById('tourInfoModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeTourModal();
        });

        document.getElementById('tourBookingModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeTourBookingModal();
        });
        document.addEventListener('DOMContentLoaded', function() {
            initMap();
            loadTourFavorites();

            document.getElementById('showRouteBtn').addEventListener('click', function() {
                if (!selectedMountain) {
                    alert('Zəhmət olmasa əvvəlcə bir dağ seçin!');
                    return;
                }

                showRoute(selectedMountain);
            });
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const country = this.dataset.country;
                    filterMountains(country);
                });
            });
            document.getElementById('closeInfoBtn').addEventListener('click', function() {
                closeInfoPanel();
            });
            document.getElementById('myLocationBtn').addEventListener('click', function() {
                goToMyLocation();
            });
            document.getElementById('favoriteBtn').addEventListener('click', function() {
                toggleFavorite();
            });
        });
        function goToMyLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLocation = [position.coords.latitude, position.coords.longitude];
                        updateUserMarkerPosition();
                        map.flyTo(userLocation, 12, { duration: 1.5 });
                        if (userMarker) {
                            userMarker.openPopup();
                        }
                    },
                    (error) => {
                        alert('Mövqe alına bilmədi. Zəhmət olmasa brauzerdə location icazəsi verin.');
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0
                    }
                );
            } else {
                map.flyTo(userLocation, 12, { duration: 1.5 });
                if (userMarker) {
                    userMarker.openPopup();
                }
            }
        }
        function closeInfoPanel() {
            document.getElementById('infoContent').style.display = 'none';
            document.getElementById('infoPlaceholder').style.display = 'flex';
            selectedMountain = null;
            if (routingControl) {
                map.removeControl(routingControl);
                routingControl = null;
            }
            if (routeLine) {
                map.removeLayer(routeLine);
                routeLine = null;
            }
            map.closePopup();
        }
        let routeLine = null;
        function showRoute(mountain) {
            if (routingControl) {
                map.removeControl(routingControl);
                routingControl = null;
            }
            if (routeLine) {
                map.removeLayer(routeLine);
                routeLine = null;
            }
            const start = L.latLng(userLocation[0], userLocation[1]);
            const end = L.latLng(mountain.coords[0], mountain.coords[1]);
            const distance = start.distanceTo(end) / 1000;
            routeLine = L.polyline([start, end], {
                color: '#e8a54b',
                weight: 4,
                opacity: 0.8,
                dashArray: '10, 10',
                className: 'route-line-animated'
            }).addTo(map);
            const midPoint = L.latLng(
                (userLocation[0] + mountain.coords[0]) / 2,
                (userLocation[1] + mountain.coords[1]) / 2
            );
            
            L.popup()
                .setLatLng(midPoint)
                .setContent(`
                    <div class="route-popup">
                        <strong>📍 ${mountain.name}</strong><br>
                        <span>📏 Məsafə: ~${distance.toFixed(0)} km</span><br>
                        <span>🚗 Təxmini vaxt: ~${Math.ceil(distance / 60)} saat</span><br>
                        <a href="https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${mountain.coords[0]},${mountain.coords[1]}" target="_blank" class="popup-link">
                            🗺️ Google Maps-də aç
                        </a>
                    </div>
                `)
                .openOn(map);
            const bounds = L.latLngBounds([start, end]);
            map.fitBounds(bounds, { padding: [80, 80] });
            try {
                routingControl = L.Routing.control({
                    waypoints: [start, end],
                    routeWhileDragging: false,
                    addWaypoints: false,
                    show: false,
                    fitSelectedRoutes: false,
                    lineOptions: {
                        styles: [{ color: '#1a3a52', weight: 5, opacity: 0.9 }]
                    },
                    createMarker: function() { return null; }
                }).addTo(map);
                const routingContainer = document.querySelector('.leaflet-routing-container');
                if (routingContainer) {
                    routingContainer.style.display = 'none';
                }
                routingControl.on('routesfound', function() {
                    if (routeLine) {
                        map.removeLayer(routeLine);
                        routeLine = null;
                    }
                    const container = document.querySelector('.leaflet-routing-container');
                    if (container) {
                        container.style.display = 'none';
                    }
                });
            } catch (e) {
                console.log('Routing service unavailable, using straight line');
            }
        }
        let allMarkers = [];
        let currentFilteredMountains = mountains;
        function getMarkerSize(zoom) {
            if (zoom >= 10) {
                return { iconSize: [120, 50], fontSize: '0.8rem', showLabel: true, showFlag: true };
            } else if (zoom >= 8) {
                return { iconSize: [100, 45], fontSize: '0.75rem', showLabel: true, showFlag: true };
            } else if (zoom >= 6) {
                return { iconSize: [80, 40], fontSize: '0.7rem', showLabel: true, showFlag: true };
            } else if (zoom >= 5) {
                return { iconSize: [50, 35], fontSize: '0.6rem', showLabel: false, showFlag: true };
            } else if (zoom >= 4) {
                return { iconSize: [35, 30], fontSize: '0.55rem', showLabel: false, showFlag: false };
            } else {
                return { iconSize: [24, 24], fontSize: '0.5rem', showLabel: false, showFlag: false };
            }
        }
        function addMountainMarkers(mountainList) {
            const zoom = map.getZoom();
            const size = getMarkerSize(zoom);
            
            mountainList.forEach(mountain => {
                const flag = countryFlags[mountain.country] || '🏔️';
                
                let markerHtml;
                if (size.showLabel && size.showFlag) {
                    markerHtml = `<div class="marker-content ${mountain.difficultyClass}" data-country="${mountain.country}" style="font-size: ${size.fontSize}">
                        <span class="marker-icon">⛰️</span>
                        <span class="marker-label">${mountain.name}</span>
                        <span class="marker-flag">${flag}</span>
                    </div>`;
                } else if (size.showFlag) {
                    markerHtml = `<div class="marker-content marker-small ${mountain.difficultyClass}" data-country="${mountain.country}">
                        <span class="marker-icon-small">⛰️</span>
                        <span class="marker-flag-small">${flag}</span>
                    </div>`;
                } else {
                    markerHtml = `<div class="marker-content marker-dot ${mountain.difficultyClass}" data-country="${mountain.country}">
                        <span class="marker-dot-icon">⛰️</span>
                    </div>`;
                }
                
                const mountainIcon = L.divIcon({
                    className: 'mountain-marker-icon',
                    html: markerHtml,
                    iconSize: size.iconSize,
                    iconAnchor: [size.iconSize[0] / 2, size.iconSize[1]]
                });

                const marker = L.marker(mountain.coords, { icon: mountainIcon })
                    .addTo(map)
                    .on('click', () => showMountainInfo(mountain));
                marker.bindTooltip(mountain.name + ' (' + mountain.altitude + ')', {
                    permanent: false,
                    direction: 'top',
                    offset: [0, -10],
                    className: 'mountain-tooltip'
                });
                
                allMarkers.push({ marker, mountain });
            });
        }
        function updateMarkerSizes() {
            const zoom = map.getZoom();
            const size = getMarkerSize(zoom);
            allMarkers.forEach(({ marker }) => {
                map.removeLayer(marker);
            });
            allMarkers = [];
            addMountainMarkers(currentFilteredMountains);
        }
        
        function filterMountains(country) {
            allMarkers.forEach(({ marker }) => {
                map.removeLayer(marker);
            });
            allMarkers = [];
            let filteredMountains = mountains;
            
            if (country !== 'all') {
                if (country === 'Avropa') {
                    filteredMountains = mountains.filter(m => 
                        ['Fransa/İtaliya', 'İsveçrə/İtaliya'].includes(m.country)
                    );
                } else if (country === 'Asiya') {
                    filteredMountains = mountains.filter(m => 
                        ['Nepal/Çin', 'Pakistan/Çin', 'Yaponiya'].includes(m.country)
                    );
                } else if (country === 'Digər') {
                    filteredMountains = mountains.filter(m => 
                        ['Tanzaniya', 'ABŞ', 'Argentina', 'Ermənistan'].includes(m.country)
                    );
                } else {
                    filteredMountains = mountains.filter(m => m.country === country);
                }
            }
            
            currentFilteredMountains = filteredMountains;
            addMountainMarkers(filteredMountains);
            if (filteredMountains.length > 0) {
                if (country === 'all') {
                    map.setView([40.5, 47.5], 4);
                } else if (country === 'Azərbaycan') {
                    map.setView([40.5, 47.5], 7);
                } else if (country === 'Gürcüstan') {
                    map.setView([42.3, 43.5], 7);
                } else if (country === 'Türkiyə') {
                    map.setView([39.5, 42], 6);
                } else if (country === 'Rusiya') {
                    map.setView([43.2, 42.8], 8);
                } else if (country === 'İran') {
                    map.setView([37, 50], 6);
                } else if (country === 'Avropa') {
                    map.setView([45.9, 7.2], 7);
                } else if (country === 'Asiya') {
                    map.setView([30, 85], 4);
                } else {
                    const bounds = L.latLngBounds(filteredMountains.map(m => m.coords));
                    map.fitBounds(bounds, { padding: [50, 50] });
                }
            }
        }

const dynamicImages = {
            hero: [
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
                'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076',
                'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=2083',
                'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070',
                'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070',
                'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076',
                'https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2051',
                'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2067'
            ],
            mountains: [
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070',
                'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=2083',
                'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
                'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070',
                'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070',
                'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076',
                'https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2051',
                'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2067',
                'https://images.unsplash.com/photo-1464278533981-50106e6176b1?q=80&w=2074',
                'https://images.unsplash.com/photo-1445363692815-ebcd599f7621?q=80&w=2070'
            ],
            tours: [
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
                'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800',
                'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
                'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800',
                'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800',
                'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
                'https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800',
                'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800',
                'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800',
                'https://images.unsplash.com/photo-1445363692815-ebcd599f7621?w=800'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
                'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600',
                'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600',
                'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600',
                'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600',
                'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600',
                'https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=600',
                'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=600',
                'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=600',
                'https://images.unsplash.com/photo-1445363692815-ebcd599f7621?w=600',
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600',
                'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600',
                'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600'
            ]
        };
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
        function applyDynamicImages() {
            const heroImage = document.querySelector('.mountain-image');
            if (heroImage) {
                const randomHeroImg = dynamicImages.hero[Math.floor(Math.random() * dynamicImages.hero.length)];
                heroImage.style.backgroundImage = `url('${randomHeroImg}')`;
            }
            const mountainCards = document.querySelectorAll('.mountain-card .card-image');
            const shuffledMountains = shuffleArray(dynamicImages.mountains);
            mountainCards.forEach((card, index) => {
                card.style.backgroundImage = `url('${shuffledMountains[index % shuffledMountains.length]}')`;
            });
            const galleryImages = document.querySelectorAll('.gallery-image');
            const shuffledGallery = shuffleArray(dynamicImages.gallery);
            galleryImages.forEach((img, index) => {
                img.style.backgroundImage = `url('${shuffledGallery[index % shuffledGallery.length]}')`;
            });
        }
        document.addEventListener('DOMContentLoaded', applyDynamicImages);

        let currentLanguage = localStorage.getItem('language') || 'az';
        
        const langFlags = {
            'az': '🇦🇿',
            'en': '🇬🇧',
            'ru': '🇷🇺',
            'tr': '🇹🇷'
        };
        
        const langNames = {
            'az': 'AZ',
            'en': 'EN',
            'ru': 'RU',
            'tr': 'TR'
        };
        function changeLanguage(lang) {
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            
            // Update language option buttons
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });
            
            // Update language dropdown button
            const langBtn = document.getElementById('langDropdownBtn');
            if (langBtn) {
                const flagEl = langBtn.querySelector('.lang-flag');
                const currentEl = langBtn.querySelector('.lang-current');
                if (flagEl) flagEl.textContent = langFlags[lang];
                if (currentEl) currentEl.textContent = langNames[lang];
            }
            
            // Update all elements with data-lang attributes
            document.querySelectorAll('[data-lang-az]').forEach(el => {
                const text = el.getAttribute(`data-lang-${lang}`);
                if (text) {
                    el.textContent = text;
                }
            });
            
            // Update placeholders
            updatePlaceholders(lang);
            
            // Update select options
            document.querySelectorAll('select option[data-lang-az]').forEach(option => {
                const text = option.getAttribute(`data-lang-${lang}`) || option.getAttribute('data-lang-az');
                if (text) {
                    option.textContent = text;
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Update map mountain info if displayed
            if (selectedMountain) {
                showMountainInfo(selectedMountain);
            }
            
            // Close dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
        }
        function updatePlaceholders(lang) {
            const placeholders = {
                az: {
                    'loginEmail': 'email@example.com',
                    'loginPassword': '••••••••',
                    'signupName': 'Adınız Soyadınız',
                    'signupEmail': 'email@example.com',
                    'signupPhone': '+994 XX XXX XX XX',
                    'signupPassword': '••••••••',
                    'signupConfirmPassword': '••••••••'
                },
                en: {
                    'loginEmail': 'email@example.com',
                    'loginPassword': '••••••••',
                    'signupName': 'Your Full Name',
                    'signupEmail': 'email@example.com',
                    'signupPhone': '+994 XX XXX XX XX',
                    'signupPassword': '••••••••',
                    'signupConfirmPassword': '••••••••'
                },
                ru: {
                    'loginEmail': 'email@example.com',
                    'loginPassword': '••••••••',
                    'signupName': 'Ваше имя',
                    'signupEmail': 'email@example.com',
                    'signupPhone': '+994 XX XXX XX XX',
                    'signupPassword': '••••••••',
                    'signupConfirmPassword': '••••••••'
                },
                tr: {
                    'loginEmail': 'email@example.com',
                    'loginPassword': '••••••••',
                    'signupName': 'Adınız Soyadınız',
                    'signupEmail': 'email@example.com',
                    'signupPhone': '+994 XX XXX XX XX',
                    'signupPassword': '••••••••',
                    'signupConfirmPassword': '••••••••'
                }
            };
            
            const langPlaceholders = placeholders[lang] || placeholders['az'];
            
            Object.keys(langPlaceholders).forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.placeholder = langPlaceholders[id];
                }
            });
            document.querySelectorAll('[data-placeholder-az]').forEach(el => {
                const placeholder = el.getAttribute(`data-placeholder-${lang}`) || el.getAttribute('data-placeholder-az');
                if (placeholder) {
                    el.placeholder = placeholder;
                }
            });
            document.querySelectorAll('select option[data-lang-az]').forEach(option => {
                const text = option.getAttribute(`data-lang-${lang}`) || option.getAttribute('data-lang-az');
                if (text) {
                    option.textContent = text;
                }
            });
        }

        const USERS_KEY = 'peakexplorer_users';
        const CURRENT_USER_KEY = 'peakexplorer_current_user';
        function getUsers() {
            const users = localStorage.getItem(USERS_KEY);
            return users ? JSON.parse(users) : [];
        }
        function saveUsers(users) {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        }
        function openLoginModal() {
            document.getElementById('loginModal').classList.add('active');
            document.getElementById('loginError').textContent = '';
            document.getElementById('loginForm').reset();
        }
        function openSignupModal() {
            document.getElementById('signupModal').classList.add('active');
            document.getElementById('signupError').textContent = '';
            document.getElementById('signupForm').reset();
        }
        function closeModals() {
            document.getElementById('loginModal').classList.remove('active');
            document.getElementById('signupModal').classList.remove('active');
        }
        function login(email, password) {
            const users = getUsers();
            const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
            
            if (!user) {
                document.getElementById('loginError').textContent = currentLanguage === 'az' 
                    ? 'Bu e-poçt qeydiyyatdan keçməyib' 
                    : 'This email is not registered';
                return;
            }
            
            if (user.password !== password) {
                document.getElementById('loginError').textContent = currentLanguage === 'az' 
                    ? 'Şifrə yanlışdır' 
                    : 'Incorrect password';
                return;
            }
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
            showUserProfile(user);
            closeModals();
            showNotification(currentLanguage === 'az' ? 'Uğurla daxil oldunuz!' : 'Login successful!', 'success');
        }
        function register(name, email, phone, password) {
            const users = getUsers();
            if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
                document.getElementById('signupError').textContent = currentLanguage === 'az' 
                    ? 'Bu e-poçt artıq qeydiyyatdan keçib' 
                    : 'This email is already registered';
                return;
            }
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                phone: phone,
                password: password,
                createdAt: new Date().toISOString(),
                firstTripDiscount: {
                    active: true,
                    percentage: 15,
                    used: false
                }
            };
            
            users.push(newUser);
            saveUsers(users);
            const currentUser = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                createdAt: newUser.createdAt,
                firstTripDiscount: newUser.firstTripDiscount
            };
            
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
            showUserProfile(currentUser);
            closeModals();
            showNotification(currentLanguage === 'az' ? 'Qeydiyyat uğurla tamamlandı! İlk gediş üçün 15% endirim qazandınız! 🎉' : 'Registration successful! You earned 15% discount for your first trip! 🎉', 'success');
        }
        function logout() {
            localStorage.removeItem(CURRENT_USER_KEY);
            hideUserProfile();
            showNotification(currentLanguage === 'az' ? 'Uğurla çıxış etdiniz' : 'Logged out successfully', 'success');
        }
        function showUserProfile(user) {
            document.getElementById('authButtons').style.display = 'none';
            document.getElementById('userProfile').style.display = 'flex';
            document.getElementById('userName').textContent = user.name;
            const avatarEl = document.querySelector('.user-avatar');
            if (avatarEl && user.avatar) {
                avatarEl.innerHTML = `<img src="${user.avatar}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            } else if (avatarEl) {
                avatarEl.textContent = '👤';
            }
        }
        function hideUserProfile() {
            document.getElementById('authButtons').style.display = 'flex';
            document.getElementById('userProfile').style.display = 'none';
        }
        function checkSession() {
            const savedUser = localStorage.getItem(CURRENT_USER_KEY);
            if (savedUser) {
                try {
                    const currentUser = JSON.parse(savedUser);
                    const users = getUsers();
                    const fullUser = users.find(u => u.id === currentUser.id);
                    
                    if (fullUser) {
                        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(fullUser));
                        showUserProfile(fullUser);
                    } else {
                        showUserProfile(currentUser);
                    }
                } catch (e) {
                    localStorage.removeItem(CURRENT_USER_KEY);
                }
            }
        }
        function showNotification(message, type = 'info') {
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.remove()">✕</button>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 5000);
        }

        const scrollToTopBtn = document.getElementById('scrollToTop');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            changeLanguage(currentLanguage);
            checkSession();
            document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const dropdown = this.closest('.nav-dropdown');
                    const isActive = dropdown.classList.contains('active');
                    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
                    if (!isActive) {
                        dropdown.classList.add('active');
                    }
                });
            });
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.nav-dropdown')) {
                    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
                }
            });
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
            });
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
            });
            document.getElementById('loginBtn').addEventListener('click', openLoginModal);
            document.getElementById('signupBtn').addEventListener('click', openSignupModal);
            document.getElementById('logoutBtn').addEventListener('click', logout);
            document.getElementById('closeLoginModal').addEventListener('click', closeModals);
            document.getElementById('closeSignupModal').addEventListener('click', closeModals);
            document.getElementById('switchToSignup').addEventListener('click', () => {
                closeModals();
                openSignupModal();
            });
            document.getElementById('switchToLogin').addEventListener('click', () => {
                closeModals();
                openLoginModal();
            });
            document.querySelectorAll('.auth-modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModals();
                });
            });
            document.getElementById('loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                login(email, password);
            });
            document.getElementById('signupForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('signupName').value;
                const email = document.getElementById('signupEmail').value;
                const phone = document.getElementById('signupPhone').value;
                const password = document.getElementById('signupPassword').value;
                const confirmPassword = document.getElementById('signupConfirmPassword').value;
                
                if (password !== confirmPassword) {
                    document.getElementById('signupError').textContent = currentLanguage === 'az' 
                        ? 'Şifrələr uyğun gəlmir' 
                        : 'Passwords do not match';
                    return;
                }
                
                register(name, email, phone, password);
            });
            document.querySelectorAll('.ai-option').forEach(option => {
                option.addEventListener('click', function() {
                    const parent = this.parentElement;
                    const isMultiSelect = parent.id === 'activityOptions';
                    
                    if (isMultiSelect) {
                        this.classList.toggle('selected');
                    } else {
                        parent.querySelectorAll('.ai-option').forEach(opt => opt.classList.remove('selected'));
                        this.classList.add('selected');
                    }
                });
            });
            const contactForm = document.getElementById('contactFormNew');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const name = document.getElementById('contactName').value.trim();
                    const phone = document.getElementById('contactPhone').value.trim();
                    const email = document.getElementById('contactEmail').value.trim();
                    const subject = document.getElementById('contactSubject').value;
                    const message = document.getElementById('contactMessage').value.trim();
                    if (!name || !phone || !email || !subject) {
                        showNotification(currentLanguage === 'az' ? '⚠️ Zəhmət olmasa bütün sahələri doldurun!' : '⚠️ Please fill in all fields!', 'error');
                        return;
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        showNotification(currentLanguage === 'az' ? '⚠️ Düzgün e-poçt ünvanı daxil edin!' : '⚠️ Please enter a valid email!', 'error');
                        return;
                    }
                    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
                    const newMessage = {
                        id: Date.now(),
                        name,
                        phone,
                        email,
                        subject,
                        message,
                        date: new Date().toISOString(),
                        read: false
                    };
                    messages.push(newMessage);
                    localStorage.setItem('contactMessages', JSON.stringify(messages));
                    showNotification(currentLanguage === 'az' ? '✅ Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.' : '✅ Your message has been sent successfully! We will contact you soon.', 'success');
                    contactForm.reset();
                });
            }
        });

        const aiTourDatabase = [
            {
                id: 'bazarduzu-expedition',
                name: { az: 'Bazardüzü Ekspedisiyası', en: 'Bazarduzu Expedition' },
                description: { az: '7 günlük professional alpinizm turu', en: '7-day professional alpinism tour' },
                icon: '🏔️',
                activities: ['climbing', 'hiking', 'photography', 'nature'],
                fitness: 'advanced',
                duration: 'week',
                budget: 'premium',
                price: '₼1200',
                tags: ['Alpinizm', 'Mürəkkəb', '7 gün']
            },
            {
                id: 'shahdag-winter',
                name: { az: 'Şahdağ Qış Turu', en: 'Shahdag Winter Tour' },
                description: { az: 'Xizək və qış macərası', en: 'Skiing and winter adventure' },
                icon: '⛷️',
                activities: ['skiing', 'photography', 'nature'],
                fitness: 'intermediate',
                duration: 'weekend',
                budget: 'mid',
                price: '₼450',
                tags: ['Xizək', 'Qış', '3 gün']
            },
            {
                id: 'khinaliq-trekking',
                name: { az: 'Xınalıq Trekkinqi', en: 'Khinaliq Trekking' },
                description: { az: 'Qədim kənd və dağ gəzintisi', en: 'Ancient village and mountain hike' },
                icon: '🥾',
                activities: ['hiking', 'culture', 'photography', 'nature'],
                fitness: 'intermediate',
                duration: 'weekend',
                budget: 'budget',
                price: '₼350',
                tags: ['Trekking', 'Mədəniyyət', '3 gün']
            },
            {
                id: 'qobustan-tour',
                name: { az: 'Qobustan Günlük Tur', en: 'Qobustan Day Tour' },
                description: { az: 'Palçıq vulkanları və qədim qayaüstü rəsmlər', en: 'Mud volcanoes and ancient rock art' },
                icon: '🌋',
                activities: ['culture', 'photography', 'nature'],
                fitness: 'beginner',
                duration: 'day',
                budget: 'budget',
                price: '₼80',
                tags: ['Mədəniyyət', 'Asan', '1 gün']
            },
            {
                id: 'tufandag-adventure',
                name: { az: 'Tufandağ Macərası', en: 'Tufandag Adventure' },
                description: { az: 'Kanat yolu və dağ gəzintisi', en: 'Cable car and mountain hiking' },
                icon: '🚡',
                activities: ['hiking', 'photography', 'nature'],
                fitness: 'beginner',
                duration: 'day',
                budget: 'budget',
                price: '₼120',
                tags: ['Kanat yolu', 'Asan', '1 gün']
            },
            {
                id: 'babadag-pilgrimage',
                name: { az: 'Babadağ Ziyarəti', en: 'Babadag Pilgrimage' },
                description: { az: 'Müqəddəs dağa səyahət', en: 'Journey to the sacred mountain' },
                icon: '⛰️',
                activities: ['hiking', 'culture', 'nature'],
                fitness: 'intermediate',
                duration: 'weekend',
                budget: 'mid',
                price: '₼280',
                tags: ['Ziyarət', 'Orta', '2 gün']
            },
            {
                id: 'photo-expedition',
                name: { az: 'Fotoqrafiya Ekspedisiyası', en: 'Photography Expedition' },
                description: { az: 'Professional fotoqraflarla dağ fotoları', en: 'Mountain photography with professionals' },
                icon: '📸',
                activities: ['photography', 'nature', 'hiking'],
                fitness: 'intermediate',
                duration: 'weekend',
                budget: 'premium',
                price: '₼650',
                tags: ['Foto', 'Premium', '3 gün']
            },
            {
                id: 'extreme-climbing',
                name: { az: 'Ekstremal Alpinizm', en: 'Extreme Climbing' },
                description: { az: 'Professional alpinistlər üçün', en: 'For professional climbers' },
                icon: '🧗',
                activities: ['climbing', 'hiking'],
                fitness: 'advanced',
                duration: 'week',
                budget: 'premium',
                price: '₼1500',
                tags: ['Ekstremal', 'Çətin', '5 gün']
            }
        ];

        function getAIRecommendations() {
            const selectedActivities = Array.from(document.querySelectorAll('#activityOptions .ai-option.selected')).map(opt => opt.dataset.value);
            const selectedFitness = document.querySelector('#fitnessOptions .ai-option.selected')?.dataset.value;
            const selectedDuration = document.querySelector('#durationOptions .ai-option.selected')?.dataset.value;
            const selectedBudget = document.querySelector('#budgetOptions .ai-option.selected')?.dataset.value;

            if (selectedActivities.length === 0) {
                showNotification(currentLanguage === 'az' ? 'Zəhmət olmasa ən azı bir aktivite seçin' : 'Please select at least one activity', 'error');
                return;
            }
            const scoredTours = aiTourDatabase.map(tour => {
                let score = 0;
                let maxScore = 0;
                maxScore += 40;
                const activityMatches = selectedActivities.filter(act => tour.activities.includes(act)).length;
                score += (activityMatches / selectedActivities.length) * 40;
                if (selectedFitness) {
                    maxScore += 25;
                    if (tour.fitness === selectedFitness) {
                        score += 25;
                    } else if (
                        (selectedFitness === 'intermediate' && tour.fitness === 'beginner') ||
                        (selectedFitness === 'advanced' && tour.fitness !== 'beginner')
                    ) {
                        score += 15;
                    }
                }
                if (selectedDuration) {
                    maxScore += 20;
                    if (tour.duration === selectedDuration) {
                        score += 20;
                    } else if (
                        (selectedDuration === 'weekend' && tour.duration === 'day') ||
                        (selectedDuration === 'week' && tour.duration === 'weekend')
                    ) {
                        score += 10;
                    }
                }
                if (selectedBudget) {
                    maxScore += 15;
                    if (tour.budget === selectedBudget) {
                        score += 15;
                    } else if (
                        (selectedBudget === 'mid' && tour.budget === 'budget') ||
                        (selectedBudget === 'premium' && tour.budget !== 'budget')
                    ) {
                        score += 8;
                    }
                }

                const matchPercentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
                return { ...tour, matchScore: matchPercentage };
            });
            const recommendations = scoredTours
                .filter(tour => tour.matchScore > 30)
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 4);

            displayAIResults(recommendations);
        }

        function displayAIResults(recommendations) {
            const container = document.getElementById('aiRecommendations');
            const resultsSection = document.getElementById('aiResults');

            if (recommendations.length === 0) {
                container.innerHTML = `
                    <div class="ai-no-results">
                        <span>😔</span>
                        <p>${currentLanguage === 'az' ? 'Seçimlərinizə uyğun tur tapılmadı. Fərqli seçimlər sınayın.' : 'No tours found matching your preferences. Try different selections.'}</p>
                    </div>
                `;
            } else {
                container.innerHTML = recommendations.map(tour => `
                    <div class="ai-tour-card" onclick="openTourInfoModal('${tour.id}')" style="cursor: pointer;">
                        <span class="ai-tour-icon">${tour.icon}</span>
                        <div class="ai-tour-info">
                            <h4>${tour.name[currentLanguage]}</h4>
                            <p>${tour.description[currentLanguage]}</p>
                            <div class="ai-tour-tags">
                                ${tour.tags.map(tag => `<span class="ai-tour-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        <span class="ai-tour-match">${tour.matchScore}%</span>
                        <button class="ai-tour-action" onclick="event.stopPropagation(); openTourBookingModal('${tour.id}')">${tour.price}</button>
                    </div>
                `).join('');
            }

            resultsSection.style.display = 'block';
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        let chatbotOpen = false;
        
        function toggleChatbot() {
            chatbotOpen = !chatbotOpen;
            document.getElementById('chatbotWindow').classList.toggle('active', chatbotOpen);
            document.getElementById('chatbotBadge').classList.add('hidden');
        }
        
        function sendSuggestion(text) {
            document.getElementById('chatInput').value = text;
            sendMessage();
        }
        
        function handleChatKeypress(e) {
            if (e.key === 'Enter') sendMessage();
        }
        
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (!message) return;
            addMessage(message, 'user');
            input.value = '';
            showTyping();
            setTimeout(() => {
                hideTyping();
                const response = generateResponse(message);
                addMessage(response, 'bot');
            }, 1000 + Math.random() * 1000);
        }
        
        function formatMessage(text) {
            // Markdown formatını HTML-ə çevir
            let formatted = text
                // Bold **text** -> <strong>text</strong>
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                // Yeni sətirləri <br> ilə əvəz et
                .replace(/\n/g, '<br>');
            
            // Nömrələnmiş siyahıları formatla (1️⃣, 2️⃣, və s.)
            formatted = formatted.replace(/(\d+️⃣)\s+(.+?)(?=\d+️⃣|<br>|$)/g, '<div style="margin: 0.5rem 0; padding-left: 0.5rem;"><strong>$1</strong> $2</div>');
            
            // Emoji və məlumat bloklarını formatla
            formatted = formatted.replace(/([📏📍⛰️📅💰🎯🏨💡❄️🌲🎫🌤️📊⚠️✅📱🚨⭐🥇🥈🥉📋💳📧🕒💬🏔️🎒🍽️🚗📅🌸☀️🍂🎒🏕️])/g, '<span style="font-size: 1.1em;">$1</span>');
            
            return `<p style="white-space: pre-line;">${formatted}</p>`;
        }
        
        function addMessage(text, type) {
            const messagesDiv = document.getElementById('chatbotMessages');
            const avatar = type === 'bot' ? '🤖' : '👤';
            
            // Mesajı formatla
            const formattedText = type === 'bot' ? formatMessage(text) : text;
            
            const messageHtml = `
                <div class="chat-message ${type}">
                    <span class="message-avatar">${avatar}</span>
                    <div class="message-content">
                        ${type === 'bot' ? formattedText : `<p>${text}</p>`}
                    </div>
                </div>
            `;
            
            messagesDiv.insertAdjacentHTML('beforeend', messageHtml);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
        
        function showTyping() {
            const messagesDiv = document.getElementById('chatbotMessages');
            const typingHtml = `
                <div class="chat-message bot" id="typingIndicator">
                    <span class="message-avatar">🤖</span>
                    <div class="message-content">
                        <div class="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            `;
            messagesDiv.insertAdjacentHTML('beforeend', typingHtml);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
        
        function hideTyping() {
            const typing = document.getElementById('typingIndicator');
            if (typing) typing.remove();
        }
        
        function generateResponse(message) {
            const lowerMsg = message.toLowerCase();
            // Cari dili localStorage-dan oxu
            const lang = localStorage.getItem('language') || currentLanguage || 'az';
            
            // Çoxdilli cavablar
            const responses = {
                az: {
                    greeting: 'Salam! 👋 Mən PeakBot-am. Azərbaycanın dağları, turlar, otellər, restoranlar və səyahət məsləhətləri haqqında suallarınıza cavab verə bilərəm. Sizə necə kömək edə bilərəm?',
                    thanks: 'Dəyməz! 😊 Başqa sualınız varsa, soruşmaqdan çəkinməyin. Yaxşı səyahətlər və unudulmaz xatirələr! 🏔️',
                    default: 'Maraqlı sual! Dağlar, turlar, otellər, restoranlar, maşın kirayəsi və ya səyahət məsləhətləri haqqında daha dəqiq sual versəniz, sizə daha yaxşı kömək edə bilərəm. 🏔️',
                    bazarduzu: '🏔️ **Bazardüzü** - Azərbaycanın ən hündür zirvəsi!\n\n📏 Hündürlük: 4466 metr\n📍 Yerləşmə: Qusar rayonu, Böyük Qafqaz silsiləsi\n⛰️ Çətinlik: Mürəkkəb (təcrübəli alpinistlər üçün)\n\n📅 Ən yaxşı vaxt: İyul-Sentyabr ayları\n💰 Tur qiyməti: ₼1200-dən başlayır\n\n🎯 Fəaliyyətlər: Alpinizm, trekking, foto-tur, düşərgə\n🏨 Yaxın otellər: Şahdağ Resort, Qusar Park Hotel\n\n💡 Məsləhət: Hündür zirvə olduğu üçün fiziki hazırlıq və xüsusi avadanlıq tələb olunur. Dağ bələdçisi ilə getmək tövsiyə olunur.',
                    shahdag: '⛷️ **Şahdağ** - Azərbaycanın ən populyar qış kurortu!\n\n📏 Hündürlük: 4243 metr\n📍 Yerləşmə: Qusar rayonu\n⛰️ Çətinlik: Orta\n\n❄️ Qış fəaliyyətləri: Xizək, snowboard, paraqlaydinq\n🌲 Yay fəaliyyətləri: Trekking, ATV turu, təbiət gəzintiləri\n\n🏨 Otel qiymətləri: ₼250-400/gecə\n🎫 Kanat yolu: Mövcuddur\n\n💡 Məsləhət: Həm qışda, həm yayda ziyarət edə bilərsiniz. Qışda xizək üçün, yayda isə təbiət görmək üçün mükəmməl yerdir. Əvvəlcədən rezervasiya etmək tövsiyə olunur.',
                    tufandag: '🏔️ **Tufandağ** - Qəbələnin gözəlliyi!\n\n📏 Hündürlük: 4191 metr\n📍 Yerləşmə: Qəbələ rayonu\n⛰️ Çətinlik: Asan (ailə üçün uyğun)\n\n🎫 Kanat yolu: Azərbaycanın ən uzun kanat yolu (3.2 km)\n💰 Kanat yolu bileti: ₼15\n\n❄️ Qış: Xizək imkanı\n🌲 Yay: Hiking, təbiət gəzintiləri\n\n💡 Məsləhət: Ailə ilə səyahət üçün mükəmməl seçim. Yaxınlıqda Qəbələ şəhəri və digər turizm obyektləri var.',
                    tours: '🎒 **Ən Populyar Turlarımız:**\n\n1️⃣ **Şahdağ Qış Turu** - ₼450\n   ❄️ Xizək, snowboard, qış əyləncələri\n\n2️⃣ **Bazardüzü Alpinizm** - ₼1200\n   ⛰️ Azərbaycanın ən hündür zirvəsinə çıxış\n\n3️⃣ **Xınalıq Mədəni Tur** - ₼350\n   🏘️ Qədim kənd, mədəni irs, autentik yeməklər\n\n4️⃣ **Qəbələ Weekend** - ₼200\n   🎢 Əyləncə parkı, təbiət, rahatlıq\n\n5️⃣ **Şəki Mədəni Tur** - ₼280\n   🏛️ Tarixi abidələr, Şəki xan sarayı\n\n📱 Ana səhifədəki "Turlar" bölməsinə baxın daha ətraflı məlumat üçün!',
                    hotels: '🏨 **Ən Yaxşı Otellərimiz:**\n\n⭐ **Premium Otellər:**\n• Şahdağ Hotel & Spa (5⭐) - ₼350/gecə\n  Spa, restoran, xizək yolu yaxınlığında\n\n• Pik Palace (5⭐) - ₼400/gecə\n  Lüks otaqlar, panoramik görünüş\n\n• Qafqaz Riverside (5⭐) - ₼320/gecə\n  Çay kənarında, təbiət içində\n\n⭐ **Orta Qiymətli:**\n• Qusar Park Hotel (4⭐) - ₼150/gecə\n• Qəbələ Resort (4⭐) - ₼180/gecə\n\n💡 Məsləhət: Qış mövsümündə (dekabr-mart) əvvəlcədən rezervasiya etmək vacibdir. Otellər səhifəsinə keçid edin rezervasiya üçün!',
                    restaurants: '🍽️ **Dağ Bölgələrində Ən Yaxşı Restoranlar:**\n\n🥇 **Premium:**\n• Şahdağ Dağ Restoranı - Premium mətbəx, panoramik görünüş\n• Altitude Restaurant - Müasir Avropa mətbəxi\n\n🥈 **Ənənəvi:**\n• Şəki Piti Evi - Ənənəvi Azərbaycan yeməkləri\n• Xınalıq Ev Yeməkləri - Autentik ləzgi mətbəxi\n• Qusar Milli Mətbəx - Regional spesiallar\n\n🥉 **Kafe və Snack:**\n• Dağ Evi - Qəhvə, dessert, yüngül yeməklər\n• Şahdağ Lounge - İçkilər və snack\n\n💡 Məsləhət: Restoranlar səhifəsinə baxın menyu və rezervasiya üçün!',
                    carRental: '🚗 **Maşın Kirayəsi:**\n\nDağ turları üçün **SUV/4x4** maşınlar tövsiyə olunur.\n\n💰 **Qiymət Aralığı:**\n• Ekonom (kiçik maşın) - ₼50-60/gün\n• Orta (sedan) - ₼80-100/gün\n• SUV/4x4 - ₼120-180/gün\n• Premium (lüks) - ₼200-300/gün\n\n📋 **Daxildir:**\n✓ Sığorta\n✓ 24/7 dəstək\n✓ GPS navigasiya\n✓ Uşaq oturacağı (tələb olunarsa)\n\n💡 Məsləhət: Qışda 4x4 maşın seçmək vacibdir. Maşın Kirayəsi səhifəsinə keçin rezervasiya üçün!',
                    weather: '🌤️ **Dağ Hava Şəraiti:**\n\nDağ hava şəraiti dəyişkəndir və tez dəyişə bilər.\n\n📊 **Ümumi Məlumat:**\n• Hündür zirvələrdə hətta yayda soyuq ola bilər\n• Qışda temperatur -10°C-dən aşağı düşə bilər\n• Yayda gündüz +20-25°C, gecə +5-10°C\n\n💡 **Məsləhətlər:**\n✓ Həmişə qat-qat geyinmək (layering)\n✓ Külək və yağışdan qoruyan geyim\n✓ Günəş gözlüyü və krem (UV qoruyucu)\n✓ Dağ səhifəsində hər dağın cari hava durumunu yoxlayın\n\n⚠️ Xəbərdarlıq: Hava şəraiti pisləşərsə, turları ləğv etmək daha yaxşıdır.',
                    price: '💰 **Qiymət Məlumatları:**\n\n🏔️ **Turlar:**\n• Qısa turlar (1-2 gün): ₼200-450\n• Orta turlar (3-5 gün): ₼600-1200\n• Uzun turlar (6+ gün): ₼1500+\n\n🏨 **Otellər (gecə):**\n• Ekonom: ₼80-150\n• Orta: ₼150-250\n• Premium: ₼250-400\n• Lüks: ₼400+\n\n🍽️ **Yemək:**\n• Kafe: ₼15-30/şəxs\n• Restoran: ₼30-80/şəxs\n• Premium: ₼80+/şəxs\n\n🚗 **Nəqliyyat:**\n• Maşın kirayəsi: ₼50-300/gün\n• Transfer: ₼100-200\n\n💡 Məsləhət: Qış mövsümündə qiymətlər yüksələ bilər. Əvvəlcədən rezervasiya etmək qənaət edir.',
                    season: '📅 **Mövsüm Məsləhətləri:**\n\n❄️ **Qış (Dekabr-Mart):**\n• Xizək və qış idmanları\n• Şahdağ və Tufandağ ən populyar\n• Otel rezervasiyası vacibdir\n• Qiymətlər yüksəkdir\n\n🌸 **Yaz (Aprel-May):**\n• Təbiət gözəlliyi, çiçəklər\n• Hiking üçün mükəmməl\n• Mülayim hava\n\n☀️ **Yay (İyun-Avqust):**\n• Alpinizm üçün ən yaxşı vaxt\n• Bazardüzü və digər zirvələr\n• Gecə düşərgəsi\n• Açıq hava fəaliyyətləri\n\n🍂 **Payız (Sentyabr-Noyabr):**\n• Rəngarəng təbiət\n• Mülayim hava\n• Foto-tur üçün ideal\n\n💡 Hər mövsümün öz gözəlliyi var!',
                    equipment: '🎒 **Lazımi Avadanlıq:**\n\n⛰️ **Alpinizm/Trekking:**\n✓ Dağ botları (su keçirməz)\n✓ Trekking çubuqları\n✓ Bel çantası (20-30L)\n✓ İstilik geyimi (qat-qat)\n✓ Yağış paltosu\n✓ Günəş gözlüyü və krem\n✓ Su və qida\n✓ İlk yardım dəsti\n\n❄️ **Qış Xizəyi:**\n✓ Xizək botları və xizəklər\n✓ Qoruyucu geyim\n✓ Günəş gözlüyü\n✓ Eldiven və papaq\n\n🏕️ **Düşərgə:**\n✓ Çadır və yuxu çantası\n✓ Mat və yastıq\n✓ Fənər və batareyalar\n✓ Qazan və qablar\n\n💡 Məsləhət: Avadanlıq kirayəsi də mövcuddur. Turlarımızda bəzi avadanlıq daxildir.',
                    safety: '⚠️ **Təhlükəsizlik Məsləhətləri:**\n\n✅ **Əsas Qaydalar:**\n• Həmişə dağ bələdçisi ilə gedin\n• Hava şəraitini yoxlayın\n• Fiziki hazırlığınızı qiymətləndirin\n• Avadanlığınızı yoxlayın\n• Yol planını paylaşın\n\n📱 **Vacib:**\n• Telefon batareyasını doldurun\n• GPS və xəritə götürün\n• İlk yardım dəsti\n• Fərdi identifikasiya\n\n🚨 **Təcili:**\n• 112 - Təcili yardım\n• Dağ xilasetmə xidməti\n\n💡 Məsləhət: Təcrübəsiz olanlar üçün mütləq bələdçi ilə getmək tövsiyə olunur. Təhlükəsizlik hər şeydən vacibdir!',
                    booking: '📅 **Rezervasiya:**\n\n✅ **Necə Rezervasiya Etmək:**\n1. Saytda istədiyiniz tur/otel/restoranı seçin\n2. Tarix və vaxt seçin\n3. Məlumatları doldurun\n4. Ödəniş edin\n\n💳 **Ödəniş:**\n• Onlayn kartla ödəniş\n• Bank köçürməsi\n• Nağd ödəniş (müəyyən hallarda)\n\n📧 **Təsdiq:**\n• Email ilə rezervasiya təsdiqi\n• SMS bildirişi\n• Telefon zəngi (tələb olunarsa)\n\n💡 Məsləhət: Qış mövsümündə ən azı 2-3 həftə əvvəlcədən rezervasiya etmək tövsiyə olunur. Ləğv etmə siyasəti hər xidmət üçün fərqlidir.',
                    contact: '📞 **Əlaqə Məlumatları:**\n\n📧 Email: info@peakexplorer.az\n📱 Telefon: +994 12 XXX XX XX\n💬 WhatsApp: +994 50 XXX XX XX\n\n🕒 **İş Saatları:**\nBazar ertəsi - Cümə: 09:00 - 18:00\nŞənbə: 10:00 - 16:00\nBazar: Qeyri-iş günü\n\n📍 **Ofis:**\nBakı şəhəri, [Ünvan]\n\n💡 Bizimlə əlaqə saxlayın suallarınız və rezervasiyalar üçün!',
                    help: '💬 **Mən sizə kömək edə bilərəm:**\n\n🏔️ Dağlar haqqında məlumat\n🎒 Tur paketləri və qiymətlər\n🏨 Otel tövsiyələri və rezervasiya\n🍽️ Restoranlar və yemək\n🚗 Maşın kirayəsi\n🌤️ Hava şəraiti\n📅 Mövsüm məsləhətləri\n🎒 Avadanlıq tövsiyələri\n⚠️ Təhlükəsizlik məsləhətləri\n\n💡 Daha dəqiq sual versəniz, daha yaxşı kömək edə bilərəm!'
                },
                en: {
                    greeting: 'Hello! 👋 I\'m PeakBot. I can answer your questions about Azerbaijan\'s mountains, tours, hotels, restaurants, and travel advice. How can I help you?',
                    thanks: 'You\'re welcome! 😊 If you have any other questions, don\'t hesitate to ask. Have great travels and unforgettable memories! 🏔️',
                    default: 'Interesting question! If you ask a more specific question about mountains, tours, hotels, restaurants, car rental, or travel advice, I can help you better. 🏔️',
                    bazarduzu: '🏔️ **Bazardüzü** - Azerbaijan\'s highest peak!\n\n📏 Height: 4466 meters\n📍 Location: Qusar district, Greater Caucasus range\n⛰️ Difficulty: Hard (for experienced climbers)\n\n📅 Best time: July-September\n💰 Tour price: Starting from ₼1200\n\n🎯 Activities: Mountaineering, trekking, photo tour, camping\n🏨 Nearby hotels: Shahdag Resort, Qusar Park Hotel\n\n💡 Tip: Physical preparation and special equipment are required due to the high altitude. It is recommended to go with a mountain guide.',
                    shahdag: '⛷️ **Shahdag** - Azerbaijan\'s most popular winter resort!\n\n📏 Height: 4243 meters\n📍 Location: Qusar district\n⛰️ Difficulty: Medium\n\n❄️ Winter activities: Skiing, snowboarding, paragliding\n🌲 Summer activities: Trekking, ATV tour, nature walks\n\n🏨 Hotel prices: ₼250-400/night\n🎫 Cable car: Available\n\n💡 Tip: You can visit both in winter and summer. Perfect for skiing in winter and enjoying nature in summer. Advance booking is recommended.',
                    tufandag: '🏔️ **Tufandağ** - Gabala\'s beauty!\n\n📏 Height: 4191 meters\n📍 Location: Gabala district\n⛰️ Difficulty: Easy (family-friendly)\n\n🎫 Cable car: Azerbaijan\'s longest cable car (3.2 km)\n💰 Cable car ticket: ₼15\n\n❄️ Winter: Skiing available\n🌲 Summer: Hiking, nature walks\n\n💡 Tip: Perfect choice for family trips. Gabala city and other tourist attractions are nearby.',
                    tours: '🎒 **Our Most Popular Tours:**\n\n1️⃣ **Shahdag Winter Tour** - ₼450\n   ❄️ Skiing, snowboarding, winter fun\n\n2️⃣ **Bazardüzü Mountaineering** - ₼1200\n   ⛰️ Climb to Azerbaijan\'s highest peak\n\n3️⃣ **Khinalug Cultural Tour** - ₼350\n   🏘️ Ancient village, cultural heritage, authentic food\n\n4️⃣ **Gabala Weekend** - ₼200\n   🎢 Amusement park, nature, relaxation\n\n5️⃣ **Sheki Cultural Tour** - ₼280\n   🏛️ Historical monuments, Sheki Khan Palace\n\n📱 Check the "Tours" section on the homepage for more details!',
                    hotels: '🏨 **Our Best Hotels:**\n\n⭐ **Premium Hotels:**\n• Shahdag Hotel & Spa (5⭐) - ₼350/night\n  Spa, restaurant, near ski slopes\n\n• Pik Palace (5⭐) - ₼400/night\n  Luxury rooms, panoramic views\n\n• Caucasus Riverside (5⭐) - ₼320/night\n  By the river, in nature\n\n⭐ **Mid-Range:**\n• Qusar Park Hotel (4⭐) - ₼150/night\n• Gabala Resort (4⭐) - ₼180/night\n\n💡 Tip: Advance booking is essential during winter season (December-March). Visit the Hotels page to book!',
                    restaurants: '🍽️ **Best Restaurants in Mountain Regions:**\n\n🥇 **Premium:**\n• Shahdag Mountain Restaurant - Premium cuisine, panoramic views\n• Altitude Restaurant - Modern European cuisine\n\n🥈 **Traditional:**\n• Sheki Piti House - Traditional Azerbaijani dishes\n• Khinalug Home Cooking - Authentic Lezgi cuisine\n• Qusar National Cuisine - Regional specialties\n\n🥉 **Cafes & Snacks:**\n• Mountain House - Coffee, desserts, light meals\n• Shahdag Lounge - Drinks and snacks\n\n💡 Tip: Check the Restaurants page for menus and reservations!',
                    carRental: '🚗 **Car Rental:**\n\n**SUV/4x4** vehicles are recommended for mountain tours.\n\n💰 **Price Range:**\n• Economy (small car) - ₼50-60/day\n• Mid-size (sedan) - ₼80-100/day\n• SUV/4x4 - ₼120-180/day\n• Premium (luxury) - ₼200-300/day\n\n📋 **Included:**\n✓ Insurance\n✓ 24/7 support\n✓ GPS navigation\n✓ Child seat (if needed)\n\n💡 Tip: Choosing a 4x4 vehicle is essential in winter. Visit the Car Rental page to book!',
                    weather: '🌤️ **Mountain Weather:**\n\nMountain weather is variable and can change quickly.\n\n📊 **General Information:**\n• High peaks can be cold even in summer\n• Winter temperatures can drop below -10°C\n• Summer: +20-25°C during day, +5-10°C at night\n\n💡 **Tips:**\n✓ Always dress in layers\n✓ Wind and rain protection\n✓ Sunglasses and sunscreen (UV protection)\n✓ Check current weather for each mountain on the mountain page\n\n⚠️ Warning: If weather conditions worsen, it\'s better to cancel tours.',
                    price: '💰 **Price Information:**\n\n🏔️ **Tours:**\n• Short tours (1-2 days): ₼200-450\n• Medium tours (3-5 days): ₼600-1200\n• Long tours (6+ days): ₼1500+\n\n🏨 **Hotels (per night):**\n• Economy: ₼80-150\n• Mid-range: ₼150-250\n• Premium: ₼250-400\n• Luxury: ₼400+\n\n🍽️ **Food:**\n• Cafe: ₼15-30/person\n• Restaurant: ₼30-80/person\n• Premium: ₼80+/person\n\n🚗 **Transportation:**\n• Car rental: ₼50-300/day\n• Transfer: ₼100-200\n\n💡 Tip: Prices may increase during winter season. Advance booking saves money.',
                    season: '📅 **Seasonal Advice:**\n\n❄️ **Winter (December-March):**\n• Skiing and winter sports\n• Shahdag and Tufandağ most popular\n• Hotel booking essential\n• Higher prices\n\n🌸 **Spring (April-May):**\n• Nature beauty, flowers\n• Perfect for hiking\n• Mild weather\n\n☀️ **Summer (June-August):**\n• Best time for mountaineering\n• Bazardüzü and other peaks\n• Night camping\n• Outdoor activities\n\n🍂 **Autumn (September-November):**\n• Colorful nature\n• Mild weather\n• Ideal for photo tours\n\n💡 Each season has its own beauty!',
                    equipment: '🎒 **Required Equipment:**\n\n⛰️ **Mountaineering/Trekking:**\n✓ Mountain boots (waterproof)\n✓ Trekking poles\n✓ Backpack (20-30L)\n✓ Warm clothing (layered)\n✓ Rain jacket\n✓ Sunglasses and sunscreen\n✓ Water and food\n✓ First aid kit\n\n❄️ **Winter Skiing:**\n✓ Ski boots and skis\n✓ Protective clothing\n✓ Sunglasses\n✓ Gloves and hat\n\n🏕️ **Camping:**\n✓ Tent and sleeping bag\n✓ Mat and pillow\n✓ Flashlight and batteries\n✓ Stove and cookware\n\n💡 Tip: Equipment rental is also available. Some equipment is included in our tours.',
                    safety: '⚠️ **Safety Tips:**\n\n✅ **Basic Rules:**\n• Always go with a mountain guide\n• Check weather conditions\n• Assess your physical fitness\n• Check your equipment\n• Share your route plan\n\n📱 **Important:**\n• Charge phone battery\n• Bring GPS and map\n• First aid kit\n• Personal identification\n\n🚨 **Emergency:**\n• 112 - Emergency services\n• Mountain rescue service\n\n💡 Tip: Inexperienced climbers should definitely go with a guide. Safety is more important than anything!',
                    booking: '📅 **Booking:**\n\n✅ **How to Book:**\n1. Select your desired tour/hotel/restaurant on the site\n2. Choose date and time\n3. Fill in information\n4. Make payment\n\n💳 **Payment:**\n• Online card payment\n• Bank transfer\n• Cash payment (in certain cases)\n\n📧 **Confirmation:**\n• Booking confirmation by email\n• SMS notification\n• Phone call (if needed)\n\n💡 Tip: It is recommended to book at least 2-3 weeks in advance during winter season. Cancellation policy varies for each service.',
                    contact: '📞 **Contact Information:**\n\n📧 Email: info@peakexplorer.az\n📱 Phone: +994 12 XXX XX XX\n💬 WhatsApp: +994 50 XXX XX XX\n\n🕒 **Working Hours:**\nMonday - Friday: 09:00 - 18:00\nSaturday: 10:00 - 16:00\nSunday: Day off\n\n📍 **Office:**\nBaku city, [Address]\n\n💡 Contact us for questions and bookings!',
                    help: '💬 **I can help you with:**\n\n🏔️ Information about mountains\n🎒 Tour packages and prices\n🏨 Hotel recommendations and booking\n🍽️ Restaurants and food\n🚗 Car rental\n🌤️ Weather conditions\n📅 Seasonal advice\n🎒 Equipment recommendations\n⚠️ Safety tips\n\n💡 If you ask a more specific question, I can help you better!'
                }
            };
            
            const resp = responses[lang] || responses['az'];
            
            // Greetings
            if (lowerMsg.includes('salam') || lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('привет') || lowerMsg.includes('merhaba')) {
                return resp.greeting;
            }
            
            // Thanks
            if (lowerMsg.includes('təşəkkür') || lowerMsg.includes('sağol') || lowerMsg.includes('thanks') || lowerMsg.includes('thank you') || lowerMsg.includes('спасибо') || lowerMsg.includes('teşekkür')) {
                return resp.thanks;
            }
            
            // Mountains
            if (lowerMsg.includes('bazardüzü') || lowerMsg.includes('bazarduzu') || lowerMsg.includes('bazarduzi')) {
                return resp.bazarduzu;
            }
            
            if (lowerMsg.includes('şahdağ') || lowerMsg.includes('shahdag') || lowerMsg.includes('шахдаг') || lowerMsg.includes('shah dag')) {
                return resp.shahdag;
            }
            
            if (lowerMsg.includes('tufandağ') || lowerMsg.includes('tufandag') || lowerMsg.includes('туфандаг') || lowerMsg.includes('tufan dag')) {
                return resp.tufandag;
            }
            
            // Tours
            if (lowerMsg.includes('tur') || lowerMsg.includes('tour') || lowerMsg.includes('туры') || lowerMsg.includes('turlar') || lowerMsg.includes('turları')) {
                return resp.tours;
            }
            
            // Hotels
            if (lowerMsg.includes('otel') || lowerMsg.includes('hotel') || lowerMsg.includes('отель') || lowerMsg.includes('oteller') || lowerMsg.includes('otellər')) {
                return resp.hotels;
            }
            
            // Restaurants
            if (lowerMsg.includes('restoran') || lowerMsg.includes('yemək') || lowerMsg.includes('mətbəx') || lowerMsg.includes('restaurant') || lowerMsg.includes('ресторан') || lowerMsg.includes('yemek') || lowerMsg.includes('yemekler')) {
                return resp.restaurants;
            }
            
            // Car rental
            if (lowerMsg.includes('maşın') || lowerMsg.includes('kiraye') || lowerMsg.includes('avtomobil') || lowerMsg.includes('car') || lowerMsg.includes('rental') || lowerMsg.includes('машина') || lowerMsg.includes('araba') || lowerMsg.includes('kiralama')) {
                return resp.carRental;
            }
            
            // Weather
            if (lowerMsg.includes('hava') || lowerMsg.includes('weather') || lowerMsg.includes('погода') || lowerMsg.includes('hava durumu') || lowerMsg.includes('temperatur') || lowerMsg.includes('temperature')) {
                return resp.weather;
            }
            
            // Price
            if (lowerMsg.includes('qiymət') || lowerMsg.includes('price') || lowerMsg.includes('стоимость') || lowerMsg.includes('fiyat') || lowerMsg.includes('neçə') || lowerMsg.includes('how much') || lowerMsg.includes('сколько')) {
                return resp.price;
            }
            
            // Season
            if (lowerMsg.includes('mövsüm') || lowerMsg.includes('season') || lowerMsg.includes('сезон') || lowerMsg.includes('mevsim') || lowerMsg.includes('qış') || lowerMsg.includes('yay') || lowerMsg.includes('winter') || lowerMsg.includes('summer')) {
                return resp.season;
            }
            
            // Equipment
            if (lowerMsg.includes('avadanlıq') || lowerMsg.includes('equipment') || lowerMsg.includes('снаряжение') || lowerMsg.includes('ekipman') || lowerMsg.includes('nə götürməli') || lowerMsg.includes('what to bring')) {
                return resp.equipment;
            }
            
            // Safety
            if (lowerMsg.includes('təhlükəsizlik') || lowerMsg.includes('safety') || lowerMsg.includes('безопасность') || lowerMsg.includes('güvenlik') || lowerMsg.includes('təhlükə') || lowerMsg.includes('danger')) {
                return resp.safety;
            }
            
            // Booking
            if (lowerMsg.includes('rezervasiya') || lowerMsg.includes('booking') || lowerMsg.includes('бронирование') || lowerMsg.includes('rezervasyon') || lowerMsg.includes('sifariş') || lowerMsg.includes('order')) {
                return resp.booking;
            }
            
            // Contact
            if (lowerMsg.includes('əlaqə') || lowerMsg.includes('contact') || lowerMsg.includes('контакт') || lowerMsg.includes('iletişim') || lowerMsg.includes('telefon') || lowerMsg.includes('phone') || lowerMsg.includes('email')) {
                return resp.contact;
            }
            
            // Help
            if (lowerMsg.includes('kömək') || lowerMsg.includes('help') || lowerMsg.includes('помощь') || lowerMsg.includes('yardım') || lowerMsg.includes('nə edə bilərəm') || lowerMsg.includes('what can')) {
                return resp.help;
            }
            
            // Best tours question
            if (lowerMsg.includes('ən yaxşı') || lowerMsg.includes('best') || lowerMsg.includes('лучший') || lowerMsg.includes('en iyi') || lowerMsg.includes('hansı') || lowerMsg.includes('which')) {
                if (lowerMsg.includes('tur') || lowerMsg.includes('tour')) {
                    return resp.tours;
                }
            }
            
            return resp.default;
        }