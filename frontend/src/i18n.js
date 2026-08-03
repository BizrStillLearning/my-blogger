import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navHome: 'Home',
            navAbout: 'About',
            navTech: 'Technologies',
            navTimeline: 'Timeline',
            navHobby: 'Hobby',
            navGallery: 'Gallery',
            selectTheme: 'Select Theme',
            language: 'Language',
            hero: {
                role: 'Full Stack Developer',
                description: 'Building scalable web applications with modern technologies while exploring AI-powered products.',
                btnWork: 'See My Work',
                btnCv: 'View CV'
            },
            about: {
                title: 'About',
                highlight: 'Me',
                p1: 'A Full Stack Developer who enjoys turning ideas into modern, scalable, and impactful applications. I believe the best technology is built through strong logic, continuous learning, and thoughtful user experiences.',
                p2: 'Three years at an Islamic boarding school taught me that great things require patience and discipline—two things I now apply every time I encounter a bug or design a system architecture.',
                btnDetail: 'Details about me',
                location: 'Surabaya, ID',
                listening: 'Spotify',
                gaming: 'Gaming',
                movie: 'Cinema',
                values: {
                    philosophy: 'Philosophy',
                    discipline: 'Discipline',
                    fuel: 'Fuel',
                    caffeine: 'Caffeine',
                    state: 'Principle',
                    relentless: 'Relentless'
                }
            },
            aboutDetail: {
                currentExplorationText: 'I am currently studying at Muhammadiyah University of Surabaya. My main exploration focus is integrating Web, Android, and Artificial Intelligence (AI) technologies to create an intelligent, efficient, and responsive application ecosystem.',
                futureGoalsText: 'My long-term goal is to become a Full Stack AI Engineer. I aspire to design software system architectures that are not only robust in infrastructure but also capable of processing and utilizing AI in real-time from upstream to downstream.'
            },
            techStack: {
                title: 'Core',
                highlight: 'Tech Stack',
                badge: 'system.env'
            },
            timeline: {
                title: 'Life',
                titleHighlight: 'Journey',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: 'Vocational High School',
                        description: 'SMK TI alumnus in Jombang. Spent 3 years in an Islamic Boarding School that built high discipline and strong IT fundamentals.',
                        location: 'Jombang, East Java',
                        tags: ['Informatics', 'Boarding School']
                    },
                    item2: {
                        year: '2025 - Present',
                        title: 'Informatics Student',
                        subtitle: 'Muhammadiyah University of Surabaya',
                        description: 'Informatics student focusing on Web Development, AI, and Robotics. Building a foundation for scalable systems.',
                        location: 'Surabaya, East Java',
                        tags: ['Academic', 'Full Stack']
                    }
                }
            },
            hobbySection: {
                title: 'My',
                titleHighlight: 'Hobbies',
                badge: 'Interests.log',
                items: {
                    coding: {
                        title: 'Coding',
                        subtitle: 'System Architecting',
                        description: 'Building complex logic and scalable system architectures using Go, Rust, and React.'
                    },
                    gaming: {
                        title: 'Gaming',
                        subtitle: 'Competitive Strategy',
                        description: 'Enjoying mechanical challenges and strategies in competitive games to train reflexes and focus.'
                    },
                    music: {
                        title: 'Music',
                        subtitle: 'Aural Experience',
                        description: 'Finding the perfect work rhythm through specially curated Spotify playlists.'
                    },
                    film: {
                        title: 'Film',
                        subtitle: 'Visual Storytelling',
                        description: 'Appreciating cinematography and deep narratives as a source of creative inspiration.'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: 'Coding Statistics',
                    gaming: 'Game Collection',
                    music: 'Music & Vibes',
                    film: 'Films & Anime'
                }
            },
            hobbyGaming: {
                mobileGames: 'Mobile Games',
                consolePc: 'PlayStation & PC'
            },
            hobbyMusic: {
                recentlyPlayed: 'Recently Played',
                topArtists: 'Top Musicians',
                favoriteAlbums: 'Favorite Albums'
            },
            hobbyFilm: {
                titleKdrama: 'Most Popular Korean Drama',
                titleAnime: 'Favorite Anime',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: 'Activity & Statistics',
                myWorkspace: 'My Workspace',
                workspaceCaption: 'Midnight Coding Mood ☕',
                currentlyLearning: 'Currently Learning',
                learningDescription: 'Currently focusing on exploring web interface creation, interactive, smooth animations, and modern state management.'
            },
            gallerySection: {
                title: 'My',
                titleHighlight: 'Gallery',
                subtitle: 'Snapshot of my journey',
                categories: {
                    all: 'All',
                    tech: 'Tech',
                    life: 'Life',
                    setup: 'Setup',
                    design: 'Design'
                },
                items: {
                    pondokPesantren: {
                        title: 'Boarding School Vibes',
                        description: 'Documentation of 3 years journey in the boarding school.'
                    },
                    robotics: {
                        title: 'Robotics Research',
                        description: 'Sensor and microcontroller experiments.'
                    },
                    setup: {
                        title: 'Setup Architecture',
                        description: 'Where logic and lines of code are created.'
                    },
                    uiDesign: {
                        title: 'UI Design Exploration',
                        description: 'SantriConnect interface experiments.'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: 'Crafted for high-performance digital experiences. Based in Surabaya, Indonesia.',
                directories: 'Directories',
                status: {
                    title: 'Status',
                    running: 'Running',
                    region: 'Region',
                    uptime: 'Uptime'
                },
                jumpTop: 'Back To Top'
            }
        }
    },
    id: {
        translation: {
            navHome: 'Beranda',
            navAbout: 'Tentang',
            navTech: 'Teknologi',
            navTimeline: 'Riwayat',
            navHobby: 'Hobi',
            navGallery: 'Galeri',
            selectTheme: 'Pilih Tema',
            language: 'Bahasa',
            hero: {
                role: 'Full Stack Developer',
                description: 'Membangun aplikasi web yang skalabel dengan teknologi modern sambil mengeksplorasi produk berbasis AI.',
                btnWork: 'Lihat Karya',
                btnCv: 'Unduh CV'
            },
            about: {
                title: 'Tentang',
                highlight: 'Saya',
                p1: 'Seorang Full Stack Developer yang menikmati proses mengubah ide menjadi aplikasi yang modern, skalabel, dan berdampak. Saya percaya bahwa teknologi terbaik dibangun melalui logika yang kuat, pembelajaran yang berkelanjutan, dan pengalaman pengguna yang dirancang dengan penuh perhatian.',
                p2: '3 tahun di Pondok Pesantren mengajarkan saya kalau hal besar butuh kesabaran dan disiplin—dua hal yang sekarang saya terapkan tiap kali ketemu bug atau merancang arsitektur sistem.',
                btnDetail: 'Detail tentang saya',
                location: 'Surabaya, ID',
                listening: 'Spotify',
                gaming: 'Gaming',
                movie: 'Bioskop',
                values: {
                    philosophy: 'Filosofi',
                    discipline: 'Disiplin',
                    fuel: 'Energi',
                    caffeine: 'Kafein',
                    state: 'Prinsip',
                    relentless: 'Tanpa Henti'
                }
            },
            aboutDetail: {
                currentExplorationText: 'Saat ini saya sedang menempuh pendidikan di Universitas Muhammadiyah Surabaya. Fokus utama eksplorasi saya adalah mengintegrasikan teknologi Web, Android, dan Artificial Intelligence (AI) untuk menciptakan ekosistem aplikasi yang cerdas, efisien, dan responsif.',
                futureGoalsText: 'Tujuan jangka panjang saya adalah menjadi seorang Full Stack AI Engineer. Saya berambisi untuk merancang arsitektur sistem perangkat lunak yang tidak hanya tangguh secara infrastruktur, tetapi juga mampu memproses dan memanfaatkan AI secara real-time dari hulu ke hilir.'
            },
            techStack: {
                title: 'Inti',
                highlight: 'Tumpukan Teknologi',
                badge: 'system.env'
            },
            timeline: {
                title: 'Perjalanan',
                titleHighlight: 'Hidup',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: 'Sekolah Menengah Kejuruan',
                        description: 'Alumni SMK TI di Jombang. Menjalani 3 tahun di Pondok Pesantren yang membentuk kedisiplinan tinggi dan fundamental IT yang kuat.',
                        location: 'Jombang, Jawa Timur',
                        tags: ['Informatika', 'Pondok Pesantren']
                    },
                    item2: {
                        year: '2025 - Sekarang',
                        title: 'Mahasiswa Informatika',
                        subtitle: 'Universitas Muhammadiyah Surabaya',
                        description: 'Mahasiswa Informatika yang fokus pada Web Development, AI, dan Robotics. Membangun fondasi sistem yang skalabel.',
                        location: 'Surabaya, Jawa Timur',
                        tags: ['Akademik', 'Full Stack']
                    }
                }
            },
            hobbySection: {
                title: 'Hobi &',
                titleHighlight: 'Ketertarikan',
                badge: 'Interests.log',
                items: {
                    coding: {
                        title: 'Coding',
                        subtitle: 'Arsitektur Sistem',
                        description: 'Membangun logika kompleks dan arsitektur sistem yang skalabel menggunakan Go, Rust, dan React.'
                    },
                    gaming: {
                        title: 'Gaming',
                        subtitle: 'Strategi Kompetitif',
                        description: 'Menikmati tantangan mekanik dan strategi dalam game kompetitif untuk melatih refleks dan fokus.'
                    },
                    music: {
                        title: 'Musik',
                        subtitle: 'Pengalaman Audio',
                        description: 'Menemukan ritme kerja yang sempurna melalui playlist Spotify yang dikurasi khusus.'
                    },
                    film: {
                        title: 'Film',
                        subtitle: 'Bercerita Visual',
                        description: 'Mengapresiasi sinematografi dan narasi mendalam sebagai sumber inspirasi kreatif.'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: 'Statistik Coding',
                    gaming: 'Koleksi Game',
                    music: 'Musik & Vibes',
                    film: 'Film & Anime'
                }
            },
            hobbyGaming: {
                mobileGames: 'Game Mobile',
                consolePc: 'PlayStation & PC'
            },
            hobbyMusic: {
                recentlyPlayed: 'Baru-baru Ini Diputar',
                topArtists: 'Musisi Teratas',
                favoriteAlbums: 'Album Favorit'
            },
            hobbyFilm: {
                titleKdrama: 'Drama Korea Terpopuler',
                titleAnime: 'Anime Favorit',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: 'Aktivitas & Statistik',
                myWorkspace: 'Ruang Kerja Saya',
                workspaceCaption: 'Suasana Ngoding Tengah Malam ☕',
                currentlyLearning: 'Sedang Dipelajari',
                learningDescription: 'Sedang fokus mengeksplorasi pembuatan antarmuka web yang interaktif, animasi mulus, dan pengelolaan state modern.'
            },
            gallerySection: {
                title: 'Galeri',
                titleHighlight: 'Saya',
                subtitle: 'Potret perjalanan saya',
                categories: {
                    all: 'Semua',
                    tech: 'Teknologi',
                    life: 'Kehidupan',
                    setup: 'Setup',
                    design: 'Desain'
                },
                items: {
                    pondokPesantren: {
                        title: 'Vibes Pondok Pesantren',
                        description: 'Dokumentasi 3 tahun perjalanan di pesantren.'
                    },
                    robotics: {
                        title: 'Riset Robotika',
                        description: 'Eksperimen sensor dan mikrokontroler.'
                    },
                    setup: {
                        title: 'Arsitektur Setup',
                        description: 'Tempat logika dan baris kode tercipta.'
                    },
                    uiDesign: {
                        title: 'Eksplorasi Desain UI',
                        description: 'Eksperimen antarmuka SantriConnect.'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: 'Dirancang untuk pengalaman digital berkinerja tinggi. Berbasis di Surabaya, Indonesia.',
                directories: 'Direktori',
                status: {
                    title: 'Status',
                    running: 'Berjalan',
                    region: 'Wilayah',
                    uptime: 'Waktu Aktif'
                },
                jumpTop: 'Kembali Ke Atas'
            }
        }
    },
    jp: {
        translation: {
            navHome: 'ホーム',
            navAbout: '私について',
            navTech: 'テクノロジー',
            navTimeline: 'タイムライン',
            navHobby: '趣味',
            navGallery: 'ギャラリー',
            selectTheme: 'テーマ選択',
            language: '言語',
            hero: {
                role: 'フルスタック開発者',
                description: '最新技術を用いて拡張性の高いウェブアプリケーションを構築しつつ、AIを活用した製品を探求する。',
                btnWork: '作品を見る',
                btnCv: '履歴書を見る'
            },
            about: {
                title: '私について',
                highlight: '私',
                p1: 'アイデアをモダンでスケーラブル、そして価値のあるアプリケーションへと形にすることを楽しむフルスタックデベロッパーです。優れたテクノロジーは、確かな論理的思考、継続的な学習、そしてユーザー体験への細やかな配慮によって生まれると信じています。',
                p2: 'イスラム寄宿学校での3年間は、偉大なことには忍耐と規律が必要であることを教えてくれました。この2つは、今でもバグに直面したりシステムアーキテクチャを設計したりするたびに役立っています。',
                btnDetail: '詳細を見る',
                location: 'スラバヤ, インドネシア',
                listening: 'Spotify',
                gaming: 'ゲーム',
                movie: '映画',
                values: {
                    philosophy: '哲学',
                    discipline: '規律',
                    fuel: 'エネルギー',
                    caffeine: 'カフェイン',
                    state: '原則',
                    relentless: '絶え間ない'
                }
            },
            aboutDetail: {
                currentExplorationText: '現在、私はムハマディヤ・スラバヤ大学で学んでいます。私の探求の主な焦点は、Web、Android、人工知能（AI）テクノロジーを統合して、インテリジェントで効率的かつ応答性の高いアプリケーションエコシステムを作成することです。',
                futureGoalsText: '私の長期的な目標は、フルスタックAIエンジニアになることです。インフラストラクチャ的に堅牢なだけでなく、上流から下流までリアルタイムでAIを処理および活用できるソフトウェアシステムアーキテクチャを設計することを志しています。'
            },
            techStack: {
                title: 'コア',
                highlight: 'テクノロジースタック',
                badge: 'system.env'
            },
            timeline: {
                title: '私の',
                titleHighlight: '道のり',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: '職業高校',
                        description: 'ジョンバンにあるSMK TIの卒業生。イスラム寄宿学校での3年間は、高い規律と強力なITの基礎を築きました。',
                        location: '東ジャワ州ジョムバン',
                        tags: ['情報学', '寄宿学校']
                    },
                    item2: {
                        year: '2025 - 現在',
                        title: '情報学部の学生',
                        subtitle: 'ムハマディヤ・スラバヤ大学',
                        description: 'Web開発、AI、ロボット工学に焦点を当てた情報学部の学生。スケーラブルなシステムの基盤を構築しています。',
                        location: '東ジャワ州スラバヤ',
                        tags: ['学術', 'フルスタック']
                    }
                }
            },
            hobbySection: {
                title: '私の',
                titleHighlight: '趣味',
                badge: '興味.log',
                items: {
                    coding: {
                        title: 'プログラミング',
                        subtitle: 'システム設計',
                        description: 'Go、Rust、Reactを使用して、複雑なロジックとスケーラブルなシステムアーキテクチャを構築します。'
                    },
                    gaming: {
                        title: 'ゲーム',
                        subtitle: '競争戦略',
                        description: '反射神経と集中力を鍛えるため、対戦ゲームでのメカニカルな課題と戦略を楽しみます。'
                    },
                    music: {
                        title: '音楽',
                        subtitle: '聴覚体験',
                        description: '特別に厳選されたSpotifyプレイリストを通じて、完璧な作業リズムを見つけます。'
                    },
                    film: {
                        title: '映画',
                        subtitle: '視覚的なストーリーテリング',
                        description: '創造的なインスピレーションの源として、映画撮影と深い物語を評価します。'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: 'コーディング統計',
                    gaming: 'ゲームコレクション',
                    music: '音楽＆雰囲気',
                    film: '映画＆アニメ'
                }
            },
            hobbyGaming: {
                mobileGames: 'モバイルゲーム',
                consolePc: 'PlayStation & PC'
            },
            hobbyMusic: {
                recentlyPlayed: '最近再生した曲',
                topArtists: '人気ミュージシャン',
                favoriteAlbums: 'お気に入りのアルバム'
            },
            hobbyFilm: {
                titleKdrama: '最も人気のある韓国ドラマ',
                titleAnime: 'お気に入りのアニメ',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: 'アクティビティと統計',
                myWorkspace: 'マイワークスペース',
                workspaceCaption: '深夜のコーディング気分 ☕',
                currentlyLearning: '現在学習中',
                learningDescription: '現在、インタラクティブで滑らかなアニメーション、最新の状態管理を備えたWebインターフェースの作成に注力しています。'
            },
            gallerySection: {
                title: '私の',
                titleHighlight: 'ギャラリー',
                subtitle: '私の旅のスナップショット',
                categories: {
                    all: 'すべて',
                    tech: '技術',
                    life: '生活',
                    setup: '設定',
                    design: 'デザイン'
                },
                items: {
                    pondokPesantren: {
                        title: 'ポンドック・プサントレンの雰囲気',
                        description: 'イスラム寄宿学校での3年間の記録。'
                    },
                    robotics: {
                        title: 'ロボット工学の研究',
                        description: 'センサーとマイクロコントローラーの実験。'
                    },
                    setup: {
                        title: 'セットアップアーキテクチャ',
                        description: 'ロジックとコード行が作成される場所。'
                    },
                    uiDesign: {
                        title: 'UIデザインの探求',
                        description: 'SantriConnectインターフェースの実験。'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: '高性能なデジタル体験のために作られました。インドネシア、スラバヤ拠点。',
                directories: 'ディレクトリ',
                status: {
                    title: 'ステータス',
                    running: '稼働中',
                    region: '地域',
                    uptime: '稼働時間'
                },
                jumpTop: 'トップに戻る'
            }
        }
    },
    ko: {
        translation: {
            navHome: '홈',
            navAbout: '소개',
            navTech: '기술',
            navTimeline: '타임라인',
            navHobby: '취미',
            navGallery: '갤러리',
            selectTheme: '테마 선택',
            language: '언어',
            hero: {
                role: '풀스택 개발자',
                description: '최신 기술을 활용하여 확장 가능한 웹 애플리케이션을 구축하고, 인공지능 기반 제품 개발을 모색합니다.',
                btnWork: '작품 보기',
                btnCv: '이력서 보기'
            },
            about: {
                title: '내 소개',
                highlight: '나',
                p1: '아이디어를 현대적이고 확장 가능하며 의미 있는 애플리케이션으로 구현하는 것을 즐기는 풀스택 개발자입니다. 최고의 기술은 탄탄한 논리적 사고, 꾸준한 학습, 그리고 세심하게 설계된 사용자 경험을 통해 만들어진다고 믿습니다.',
                p2: '이슬람 기숙 학교에서의 3년은 위대한 일에는 인내와 규율이 필요하다는 것을 가르쳐 주었습니다. 이 두 가지는 지금도 버그를 직면하거나 시스템 아키텍처를 설계할 때마다 적용하고 있습니다.',
                btnDetail: '자세한 정보',
                location: '수라바야, 인도네시아',
                listening: 'Spotify',
                gaming: '게임',
                movie: '영화',
                values: {
                    philosophy: '철학',
                    discipline: '규율',
                    fuel: '에너지',
                    caffeine: '카페인',
                    state: '원칙',
                    relentless: '끊임없는'
                }
            },
            aboutDetail: {
                currentExplorationText: '현재 저는 무함마디야 수라바야 대학교에서 공부하고 있습니다. 제 탐구의 주요 초점은 웹, 안드로이드 및 인공지능(AI) 기술을 통합하여 지능적이고 효율적이며 반응성이 뛰어난 애플리케이션 생태계를 만드는 것입니다.',
                futureGoalsText: '제 장기적인 목표는 풀스택 AI 엔지니어가 되는 것입니다. 인프라적으로 견고할 뿐만 아니라 상류에서 하류까지 실시간으로 AI를 처리하고 활용할 수 있는 소프트웨어 시스템 아키텍처를 설계하는 것을 야심차게 목표로 하고 있습니다.'
            },
            techStack: {
                title: '코어',
                highlight: '기술 스택',
                badge: 'system.env'
            },
            timeline: {
                title: '나의',
                titleHighlight: '여정',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: '직업 고등학교',
                        description: '좀방에 있는 SMK TI 졸업생. 이슬람 기숙 학교에서의 3년은 높은 규율과 강력한 IT 기초를 형성했습니다.',
                        location: '좀방, 동부 자바',
                        tags: ['정보학', '기숙 학교']
                    },
                    item2: {
                        year: '2025 - 현재',
                        title: '정보학 전공 학생',
                        subtitle: '무함마디야 수라바야 대학교',
                        description: '웹 개발, AI 및 로봇 공학에 중점을 둔 정보학 학생. 확장 가능한 시스템의 기반을 구축합니다.',
                        location: '수라바야, 동부 자바',
                        tags: ['학술', '풀스택']
                    }
                }
            },
            hobbySection: {
                title: '나의',
                titleHighlight: '취미',
                badge: '관심사.log',
                items: {
                    coding: {
                        title: '코딩',
                        subtitle: '시스템 아키텍처',
                        description: 'Go, Rust, React를 사용하여 복잡한 논리와 확장 가능한 시스템 아키텍처를 구축합니다.'
                    },
                    gaming: {
                        title: '게임',
                        subtitle: '경쟁 전략',
                        description: '반사 신경과 집중력을 훈련하기 위해 경쟁 게임에서 기계적인 도전과 전략을 즐깁니다.'
                    },
                    music: {
                        title: '음악',
                        subtitle: '청각 경험',
                        description: '특별히 선별된 Spotify 플레이리스트를 통해 완벽한 작업 리듬을 찾습니다.'
                    },
                    film: {
                        title: '영화',
                        subtitle: '시각적 스토리텔링',
                        description: '창조적 영감의 원천으로 영화 촬영법과 깊은 내러티브를 감상합니다.'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: '코딩 통계',
                    gaming: '게임 컬렉션',
                    music: '음악 및 분위기',
                    film: '영화 및 애니메이션'
                }
            },
            hobbyGaming: {
                mobileGames: '모바일 게임',
                consolePc: 'PlayStation 및 PC'
            },
            hobbyMusic: {
                recentlyPlayed: '최근 플레이한 음악',
                topArtists: '인기 뮤지션',
                favoriteAlbums: '좋아하는 앨범'
            },
            hobbyFilm: {
                titleKdrama: '가장 인기 있는 한국 드라마',
                titleAnime: '가장 좋아하는 애니메이션',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: '활동 및 통계',
                myWorkspace: '내 작업 공간',
                workspaceCaption: '한밤중 코딩 모드 ☕',
                currentlyLearning: '현재 학습 중',
                learningDescription: '현재 웹 인터페이스 제작, 인터랙티브, 부드러운 애니메이션 및 최신 상태 관리 탐구에 집중하고 있습니다.'
            },
            gallerySection: {
                title: '나의',
                titleHighlight: '갤러리',
                subtitle: '내 여정의 스냅샷',
                categories: {
                    all: '모두',
                    tech: '기술',
                    life: '생활',
                    setup: '설정',
                    design: '디자인'
                },
                items: {
                    pondokPesantren: {
                        title: '기숙학교 분위기',
                        description: '기숙학교에서의 3년 간의 기록.'
                    },
                    robotics: {
                        title: '로봇 공학 연구',
                        description: '센서 및 마이크로컨트롤러 실험.'
                    },
                    setup: {
                        title: '설정 아키텍처',
                        description: '논리와 코드 줄이 만들어지는 곳.'
                    },
                    uiDesign: {
                        title: 'UI 디자인 탐색',
                        description: 'SantriConnect 인터페이스 실험.'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: '고성능 디지털 경험을 위해 제작되었습니다. 인도네시아 수라바야 기반.',
                directories: '디렉토리',
                status: {
                    title: '상태',
                    running: '실행 중',
                    region: '지역',
                    uptime: '가동 시간'
                },
                jumpTop: '맨 위로'
            }
        }
    },
    zh: {
        translation: {
            navHome: '首页',
            navAbout: '关于我',
            navTech: '技术',
            navTimeline: '时间线',
            navHobby: '爱好',
            navGallery: '画廊',
            selectTheme: '选择主题',
            language: '语言',
            hero: {
                role: '全栈开发人员',
                description: '利用现代技术构建可扩展的Web应用程序，同时探索人工智能驱动的产品。',
                btnWork: '查看我的作品',
                btnCv: '查看简历'
            },
            about: {
                title: '关于我',
                highlight: '我',
                p1: '我是一名全栈开发工程师，热衷于将创意转化为现代化、可扩展且富有影响力的应用程序。我相信，卓越的技术源于严谨的逻辑思维、持续的学习，以及对用户体验的精心打磨。',
                p2: '在伊斯兰寄宿学校的3年教会了我，伟大的事情需要耐心和纪律——这不仅是我现在的信条，更是我每次面对漏洞或设计系统架构时所应用的两件事。',
                btnDetail: '关于我的细节',
                location: '泗水, 印尼',
                listening: 'Spotify',
                gaming: '游戏',
                movie: '电影',
                values: {
                    philosophy: '哲学',
                    discipline: '纪律',
                    fuel: '能量',
                    caffeine: '咖啡因',
                    state: '原则',
                    relentless: '坚持不懈'
                }
            },
            aboutDetail: {
                currentExplorationText: '目前我就读于泗水穆罕默迪亚大学。我探索的主要重点是整合Web、Android和人工智能（AI）技术，以创建智能、高效和响应迅速的应用程序生态系统。',
                futureGoalsText: '我的长期目标是成为一名全栈AI工程师。我立志于设计不仅在基础设施上坚固，而且能够从上游到下游实时处理和利用AI的软件系统架构。'
            },
            techStack: {
                title: '核心',
                highlight: '技术栈',
                badge: 'system.env'
            },
            timeline: {
                title: '我的',
                titleHighlight: '旅程',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: '职业高中',
                        description: 'Jombang SMK TI 校友。在伊斯兰寄宿学校的三年培养了高度的纪律性和强大的 IT 基础。',
                        location: '东爪哇省 琼邦',
                        tags: ['信息学', '寄宿学校']
                    },
                    item2: {
                        year: '2025 - 至今',
                        title: '信息学学生',
                        subtitle: '泗水穆罕默迪亚大学',
                        description: '专注于 Web 开发、AI 和机器人的信息学学生。构建可扩展系统的基础。',
                        location: '东爪哇省泗水',
                        tags: ['学术', '全栈']
                    }
                }
            },
            hobbySection: {
                title: '我的',
                titleHighlight: '爱好',
                badge: '兴趣.log',
                items: {
                    coding: {
                        title: '编程',
                        subtitle: '系统架构',
                        description: '使用 Go、Rust 和 React 构建复杂的逻辑和可扩展的系统架构。'
                    },
                    gaming: {
                        title: '游戏',
                        subtitle: '竞争策略',
                        description: '在竞技游戏中享受机械挑战和策略，以训练反应和专注力。'
                    },
                    music: {
                        title: '音乐',
                        subtitle: '听觉体验',
                        description: '通过精心策划的 Spotify 播放列表寻找完美的工作节奏。'
                    },
                    film: {
                        title: '电影',
                        subtitle: '视觉讲故事',
                        description: '欣赏电影摄影和深刻的叙事作为创作灵感的来源。'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: '编程统计',
                    gaming: '游戏收藏',
                    music: '音乐与氛围',
                    film: '电影与动漫'
                }
            },
            hobbyGaming: {
                mobileGames: '手机游戏',
                consolePc: 'PlayStation 和 PC'
            },
            hobbyMusic: {
                recentlyPlayed: '最近玩过的游戏',
                topArtists: '热门音乐人',
                favoriteAlbums: '最喜欢的专辑'
            },
            hobbyFilm: {
                titleKdrama: '最受欢迎的韩剧',
                titleAnime: '最喜欢的动漫',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: '活动与统计',
                myWorkspace: '我的工作区',
                workspaceCaption: '午夜编程心情 ☕',
                currentlyLearning: '当前学习中',
                learningDescription: '目前专注于探索网页界面创建、交互式流畅动画和现代状态管理。'
            },
            gallerySection: {
                title: '我的',
                titleHighlight: '画廊',
                subtitle: '我旅程的快照',
                categories: {
                    all: '全部',
                    tech: '技术',
                    life: '生活',
                    setup: '设置',
                    design: '设计'
                },
                items: {
                    pondokPesantren: {
                        title: '寄宿学校氛围',
                        description: '在寄宿学校3年旅程的记录。'
                    },
                    robotics: {
                        title: '机器人研究',
                        description: '传感器和微控制器实验。'
                    },
                    setup: {
                        title: '设置架构',
                        description: '逻辑和代码行创建的地方。'
                    },
                    uiDesign: {
                        title: 'UI设计探索',
                        description: 'SantriConnect界面实验。'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: '为高性能数字体验而打造。总部位于印度尼西亚泗水。',
                directories: '目录',
                status: {
                    title: '状态',
                    running: '运行中',
                    region: '区域',
                    uptime: '运行时间'
                },
                jumpTop: '返回顶部'
            }
        }
    },
    ar: {
        translation: {
            navHome: 'الرئيسية',
            navAbout: 'حول',
            navTech: 'التقنيات',
            navTimeline: 'الخط الزمني',
            navHobby: 'هواية',
            navGallery: 'معرض الصور',
            selectTheme: 'اختر السمة',
            language: 'اللغة',
            hero: {
                role: 'مطور فُل ستاك',
                description: 'بناء تطبيقات ويب قابلة للتطوير باستخدام التقنيات الحديثة مع استكشاف المنتجات المدعومة بالذكاء الاصطناعي.',
                btnWork: 'شاهد أعمالي',
                btnCv: 'عرض السيرة الذاتية'
            },
            about: {
                title: 'عني',
                highlight: 'أنا',
                p1: 'أنا مطور برمجيات متكامل (Full Stack Developer) أستمتع بتحويل الأفكار إلى تطبيقات حديثة وقابلة للتوسع وذات أثر حقيقي. أؤمن بأن أفضل التقنيات تُبنى على المنطق القوي، والتعلّم المستمر، والاهتمام الدقيق بتجربة المستخدم.',
                p2: 'علمتني 3 سنوات في مدرسة داخلية إسلامية أن الأشياء العظيمة تتطلب الصبر والانضباط - وهما شيئان أطبقهما الآن في كل مرة أواجه فيها خطأ برمجي أو أصمم بنية نظام.',
                btnDetail: 'تفاصيل عني',
                location: 'سورابايا، إندونيسيا',
                listening: 'سبوتيفاي',
                gaming: 'ألعاب',
                movie: 'سينما',
                values: {
                    philosophy: 'فلسفة',
                    discipline: 'انضباط',
                    fuel: 'طاقة',
                    caffeine: 'كافيين',
                    state: 'مبدأ',
                    relentless: 'لا يلين'
                }
            },
            aboutDetail: {
                currentExplorationText: 'أنا حاليًا أدرس في جامعة المحمدية سورابايا. التركيز الرئيسي لاستكشافي هو دمج تقنيات الويب والأندرويد والذكاء الاصطناعي (AI) لإنشاء نظام بيئي للتطبيقات ذكي وفعال وسريع الاستجابة.',
                futureGoalsText: 'هدفي طويل المدى هو أن أصبح مهندس ذكاء اصطناعي Full Stack. أنا طموح لتصميم بنية نظام برمجي ليست فقط قوية من حيث البنية التحتية، ولكن أيضًا قادرة على معالجة واستخدام الذكاء الاصطناعي في الوقت الفعلي من المنبع إلى المصب.'
            },
            techStack: {
                title: 'الأساسية',
                highlight: 'مجموعة التقنيات',
                badge: 'system.env'
            },
            timeline: {
                title: 'رحلة',
                titleHighlight: 'حياتي',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: 'مدرسة مهنية',
                        description: 'خريج SMK TI في جومبانج. أمضيت 3 سنوات في مدرسة داخلية إسلامية بنت انضباطًا عاليًا وأسسًا قوية في تكنولوجيا المعلومات.',
                        location: 'جومبانج، جاوة الشرقية',
                        tags: ['المعلوماتية', 'مدرسة داخلية']
                    },
                    item2: {
                        year: '2025 - الحاضر',
                        title: 'طالب معلوماتية',
                        subtitle: 'جامعة المحمدية سورابايا',
                        description: 'طالب معلوماتية يركز على تطوير الويب والذكاء الاصطناعي والروبوتات. بناء أساس للأنظمة القابلة للتطوير.',
                        location: 'سورابايا، جاوة الشرقية',
                        tags: ['أكاديمي', 'فُل ستاك']
                    }
                }
            },
            hobbySection: {
                title: 'هواياتي',
                titleHighlight: 'واهتماماتي',
                badge: 'سجل_الاهتمامات',
                items: {
                    coding: {
                        title: 'برمجة',
                        subtitle: 'هندسة النظم',
                        description: 'بناء منطق معقد وبنى أنظمة قابلة للتطوير باستخدام Go و Rust و React.'
                    },
                    gaming: {
                        title: 'ألعاب',
                        subtitle: 'استراتيجية تنافسية',
                        description: 'الاستمتاع بالتحديات الميكانيكية والاستراتيجيات في الألعاب التنافسية لتدريب ردود الفعل والتركيز.'
                    },
                    music: {
                        title: 'موسيقى',
                        subtitle: 'تجربة سمعية',
                        description: 'إيجاد إيقاع العمل المثالي من خلال قوائم تشغيل Spotify المنسقة خصيصًا.'
                    },
                    film: {
                        title: 'فيلم',
                        subtitle: 'رواية القصص المرئية',
                        description: 'تقدير التصوير السينمائي والروايات العميقة كمصدر للإلهام الإبداعي.'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: 'إحصائيات البرمجة',
                    gaming: 'مجموعة الألعاب',
                    music: 'الموسيقى والأجواء',
                    film: 'الأفلام والأنمي'
                }
            },
            hobbyGaming: {
                mobileGames: 'ألعاب الهاتف المحمول',
                consolePc: 'بلاي ستيشن والكمبيوتر'
            },
            hobbyMusic: {
                recentlyPlayed: 'تم تشغيلها مؤخراً',
                topArtists: 'أفضل الفنانين',
                favoriteAlbums: 'الألبومات المفضلة'
            },
            hobbyFilm: {
                titleKdrama: 'المسلسل الكوري الأكثر شعبية',
                titleAnime: 'الأنمي المفضل',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: 'النشاط والإحصائيات',
                myWorkspace: 'مساحة عملي',
                workspaceCaption: 'مزاج البرمجة في منتصف الليل ☕',
                currentlyLearning: 'أتعلم حاليًا',
                learningDescription: 'أركز حاليًا على استكشاف إنشاء واجهات الويب، والرسوم المتحركة التفاعلية والسلسة، وإدارة الحالة الحديثة.'
            },
            gallerySection: {
                title: 'معرض',
                titleHighlight: 'الصور الخاص بي',
                subtitle: 'لقطات من رحلتي',
                categories: {
                    all: 'الكل',
                    tech: 'تكنولوجيا',
                    life: 'حياة',
                    setup: 'إعداد',
                    design: 'تصميم'
                },
                items: {
                    pondokPesantren: {
                        title: 'أجواء المدرسة الداخلية',
                        description: 'توثيق 3 سنوات من الرحلة في المدرسة الداخلية.'
                    },
                    robotics: {
                        title: 'أبحاث الروبوتات',
                        description: 'تجارب أجهزة الاستشعار والمتحكمات الدقيقة.'
                    },
                    setup: {
                        title: 'هندسة الإعداد',
                        description: 'حيث يتم إنشاء المنطق وخطوط التعليمات البرمجية.'
                    },
                    uiDesign: {
                        title: 'استكشاف تصميم واجهة المستخدم',
                        description: 'تجارب واجهة SantriConnect.'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: 'مصمم لتجارب رقمية عالية الأداء. مقرنا في سورابايا، إندونيسيا.',
                directories: 'الدلائل',
                status: {
                    title: 'الحالة',
                    running: 'قيد التشغيل',
                    region: 'المنطقة',
                    uptime: 'وقت التشغيل'
                },
                jumpTop: 'العودة إلى الأعلى'
            }
        }
    },
    es: {
        translation: {
            navHome: 'Inicio',
            navAbout: 'Acerca de',
            navTech: 'Tecnologías',
            navTimeline: 'Cronología',
            navHobby: 'Pasatiempo',
            navGallery: 'Galería',
            selectTheme: 'Seleccionar Tema',
            language: 'Idioma',
            hero: {
                role: 'Desarrollador Full Stack',
                description: 'Desarrollar aplicaciones web escalables con tecnologías modernas, explorando al mismo tiempo productos basados en inteligencia artificial.',
                btnWork: 'Ver mi trabajo',
                btnCv: 'Ver CV'
            },
            about: {
                title: 'Sobre Mí',
                highlight: 'Mí',
                p1: 'Soy un Desarrollador Full Stack que disfruta convirtiendo ideas en aplicaciones modernas, escalables y con impacto. Creo que la mejor tecnología se construye con una lógica sólida, aprendizaje continuo y experiencias de usuario cuidadosamente diseñadas.',
                p2: 'Mis 3 años en un internado islámico me enseñaron que las grandes cosas requieren paciencia y disciplina, dos cosas que ahora aplico cada vez que me enfrento a un error o diseño la arquitectura de un sistema.',
                btnDetail: 'Detalles sobre mí',
                location: 'Surabaya, ID',
                listening: 'Spotify',
                gaming: 'Videojuegos',
                movie: 'Cine',
                values: {
                    philosophy: 'Filosofía',
                    discipline: 'Disciplina',
                    fuel: 'Energía',
                    caffeine: 'Cafeína',
                    state: 'Principio',
                    relentless: 'Implacable'
                }
            },
            aboutDetail: {
                currentExplorationText: 'Actualmente estoy estudiando en la Universidad Muhammadiyah de Surabaya. El enfoque principal de mi exploración es integrar tecnologías Web, Android e Inteligencia Artificial (IA) para crear un ecosistema de aplicaciones inteligente, eficiente y receptivo.',
                futureGoalsText: 'Mi objetivo a largo plazo es convertirme en un Ingeniero de IA Full Stack. Aspiro a diseñar arquitecturas de sistemas de software que no solo sean robustas en infraestructura, sino que también puedan procesar y utilizar IA en tiempo real desde el origen hasta el destino final.'
            },
            techStack: {
                title: 'Núcleo',
                highlight: 'Stack Tecnológico',
                badge: 'system.env'
            },
            timeline: {
                title: 'Mi',
                titleHighlight: 'Viaje',
                items: {
                    item1: {
                        year: '2022 - 2025',
                        title: 'SMK TI Annajiyah Bahrul Ulum',
                        subtitle: 'Escuela Secundaria Vocacional',
                        description: 'Exalumno de SMK TI en Jombang. Pasé 3 años en un internado islámico que forjó una alta disciplina y sólidos fundamentos en TI.',
                        location: 'Jombang, Java Oriental',
                        tags: ['Informática', 'Internado']
                    },
                    item2: {
                        year: '2025 - Presente',
                        title: 'Estudiante de Informática',
                        subtitle: 'Universidad Muhammadiyah de Surabaya',
                        description: 'Estudiante de informática centrado en desarrollo web, IA y robótica. Construyendo bases para sistemas escalables.',
                        location: 'Surabaya, Java Oriental',
                        tags: ['Académico', 'Full Stack']
                    }
                }
            },
            hobbySection: {
                title: 'Mis',
                titleHighlight: 'Pasatiempos',
                badge: 'Intereses.log',
                items: {
                    coding: {
                        title: 'Programación',
                        subtitle: 'Arquitectura de Sistemas',
                        description: 'Construyendo lógica compleja y arquitecturas de sistemas escalables utilizando Go, Rust y React.'
                    },
                    gaming: {
                        title: 'Videojuegos',
                        subtitle: 'Estrategia Competitiva',
                        description: 'Disfrutando de los desafíos mecánicos y estrategias en juegos competitivos para entrenar reflejos y concentración.'
                    },
                    music: {
                        title: 'Música',
                        subtitle: 'Experiencia Auditiva',
                        description: 'Encontrando el ritmo de trabajo perfecto a través de listas de reproducción de Spotify especialmente seleccionadas.'
                    },
                    film: {
                        title: 'Cine',
                        subtitle: 'Narración Visual',
                        description: 'Apreciando la cinematografía y las narrativas profundas como fuente de inspiración creativa.'
                    }
                }
            },
            hobbyDetail: {
                header: {
                    coding: 'Estadísticas de Programación',
                    gaming: 'Colección de Juegos',
                    music: 'Música y Ambiente',
                    film: 'Películas y Anime'
                }
            },
            hobbyGaming: {
                mobileGames: 'Juegos para Móviles',
                consolePc: 'PlayStation y PC'
            },
            hobbyMusic: {
                recentlyPlayed: 'Reproducidos Recientemente',
                topArtists: 'Mejores Artistas',
                favoriteAlbums: 'Álbumes Favoritos'
            },
            hobbyFilm: {
                titleKdrama: 'Dramas Coreanos Populares',
                titleAnime: 'Anime Favorito',
                items: {
                    loveTranslated: { title: 'Can This Love Be Translated?', release: '2026' },
                    manipulated: { title: 'The Manipulated', release: '2025' },
                    alchemy: { title: 'Alchemy of Souls', release: '2022' },
                    watermelon: { title: 'Twinkling Watermelon', release: '2023' },
                    perfectCrown: { title: 'Perfect Crown', release: '2026' },
                    goblin: { title: 'Goblin', release: '2016' },
                    onePiece: { title: 'One Piece', release: '1999' },
                    bleach: { title: 'Bleach', release: '2004' },
                    classroomElite: { title: 'Classroom of the Elite', release: '2017' },
                    oregairu: { title: 'Oregairu', release: '2013' },
                    oshinoko: { title: 'Oshi no Ko', release: '2023' },
                    fate: { title: 'Fate/stay night', release: '2006' }
                }
            },
            hobbyCoding: {
                activityStats: 'Actividad y Estadísticas',
                myWorkspace: 'Mi Espacio de Trabajo',
                workspaceCaption: 'Vibras de Programación Nocturna ☕',
                currentlyLearning: 'Aprendiendo Actualmente',
                learningDescription: 'Actualmente enfocado en explorar la creación de interfaces web interactivas, animaciones fluidas y la gestión de estado moderna.'
            },
            gallerySection: {
                title: 'Mi',
                titleHighlight: 'Galería',
                subtitle: 'Instantánea de mi viaje',
                categories: {
                    all: 'Todo',
                    tech: 'Tecnología',
                    life: 'Vida',
                    setup: 'Configuración',
                    design: 'Diseño'
                },
                items: {
                    pondokPesantren: {
                        title: 'Vibraciones del Internado',
                        description: 'Documentación de 3 años de viaje en el internado.'
                    },
                    robotics: {
                        title: 'Investigación en Robótica',
                        description: 'Experimentos con sensores y microcontroladores.'
                    },
                    setup: {
                        title: 'Arquitectura de Configuración',
                        description: 'Donde se crean la lógica y las líneas de código.'
                    },
                    uiDesign: {
                        title: 'Exploración de Diseño UI',
                        description: 'Experimentos de interfaz de SantriConnect.'
                    }
                }
            },
            footer: {
                brand: 'KAIZER.LOG',
                desc: 'Creado para experiencias digitales de alto rendimiento. Con sede en Surabaya, Indonesia.',
                directories: 'Directorios',
                status: {
                    title: 'Estado',
                    running: 'En ejecución',
                    region: 'Región',
                    uptime: 'Tiempo de actividad'
                },
                jumpTop: 'Volver arriba'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;


