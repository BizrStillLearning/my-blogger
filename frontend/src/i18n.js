import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navHome: 'Home', navAbout: 'About', navTech: 'Technologies', navTimeline: 'Timeline', navHobby: 'Hobby', navGallery: 'Gallery',
            selectTheme: 'Select Theme', language: 'Language',
            hero: {
                badge: 'Visionary Full Stack Developer',
                role: 'Full Stack Developer',
                description: '"Intermediate Full Stack Engineer & System Architect crafting scalable end-to-end solutions."',
                btnWork: 'See My Work', btnCv: 'View CV',
            },
            about: {
                title: 'About Me',
                p1: 'A tech enthusiast who finds peace in complex logic and a cup of warm coffee.',
                p2: 'My 3 years in a Pondok Pesantren taught me that great things require patience and discipline—two things I now apply every time I face a bug or design a system architecture.',
                btnDetail: 'Detail about me', location: 'Surabaya, ID', listening: 'Spotify', gaming: 'Gaming', movie: 'Cinema',
                values: { philosophy: 'Philosophy', discipline: 'Discipline', fuel: 'Fuel', caffeine: 'Caffeine', state: 'State', relentless: 'Relentless' },
            },
            techStack: {
              title: 'Core',
                Highlight: 'Tech Stack',
                badge: 'system.env',
            },
            timeline: {
                title: 'Life', titleHighlight: 'Journey',
                items: {
                    item1: {
                        year: '2022 - 2025', title: 'SMK TI Annajiyah Bahrul Ulum', subtitle: 'Vocational High School',

                        description: 'SMK TI alumnus in Jombang. Spent 3 years in an Islamic Boarding School that built high discipline and strong IT fundamentals.',
                        location: 'Jombang, Jawa Timur',
                        tags: ['Informatics', 'Boarding School']
                    },
                    item2: {
                        year: '2025 - Present', title: 'Informatics Student', subtitle: 'Universitas Muhammadiyah Surabaya',
                        description: 'Informatics student focusing on Web Development, AI, and Robotics. Building a foundation for scalable systems.',
                        location: 'Surabaya, Jawa Timur',
                        tags: ['Academic', 'Full Stack']
                    }
                }
            },
            hobbySection: {
                title: 'My', titleHighlight: 'Hobbies', badge: 'Interests.log',
                items: {
                    coding: { title: "Coding", subtitle: "System Architecting", description: "Building complex logic and scalable system architectures using Go, Rust, and React." },
                    gaming: { title: "Gaming", subtitle: "Competitive Strategy", description: "Enjoying mechanical challenges and strategies in competitive games to train reflexes and focus." },
                    music: { title: "Music", subtitle: "Aural Experience", description: "Finding the perfect work rhythm through specially curated Spotify playlists." },
                    film: { title: "Film", subtitle: "Visual Storytelling", description: "Appreciating cinematography and deep narratives as a source of creative inspiration." }
                }
            },
            gallerySection: {
                title: 'My', titleHighlight: 'Gallery', subtitle: 'Snapshot of my journey',
                categories: { all: 'All', tech: 'Tech', life: 'Life', setup: 'Setup', design: 'Design' },
                items: {
                    pondokPesantren: { title: 'Pondok Pesantren Vibes', description: 'Documentation of 3 years journey in the boarding school.' },
                    robotics: { title: 'Robotics Research', description: 'Sensor and microcontroller experiments.' },
                    setup: { title: 'Setup Architecture', description: 'Where logic and lines of code are created.' },
                    uiDesign: { title: 'UI Design Exploration', description: 'SantriConnect interface experiments.' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "Crafted for high-performance digital experiences. Based in Surabaya, Indonesia.",
                directories: "Directories",
                status: { title: "Status", running: "Running", region: "Region", uptime: "Uptime" },
                jumpTop: "Back To Top"
            }
        },
    },
    id: {
        translation: {
            navHome: 'Beranda', navAbout: 'Tentang', navTech: 'Teknologi', navTimeline: 'Riwayat', navHobby: 'Hobi', navGallery: 'Galeri',
            selectTheme: 'Pilih Tema', language: 'Bahasa',
            hero: {
                badge: 'Full Stack Developer Visioner',
                role: 'Full Stack Developer',
                description: '"Engineer Full Stack Menengah & Arsitek Sistem yang membangun solusi end-to-end yang skalabel."',
                btnWork: 'Lihat Karya', btnCv: 'Unduh CV',
            },
            about: {
                title: 'Tentang Saya',
                p1: 'Tech enthusiast yang nemu ketenangan di balik logika rumit dan segelas kopi hangat.',
                p2: '3 tahun di Pondok Pesantren ngajarin saya kalau hal besar butuh kesabaran dan disiplin—dua hal yang sekarang saya terapin tiap kali ketemu bug atau ngerancang arsitektur sistem.',
                btnDetail: 'Detail tentang saya', location: 'Surabaya, ID', listening: 'Spotify', gaming: 'Gaming', movie: 'Bioskop',
                values: { philosophy: 'Filosofi', discipline: 'Disiplin', fuel: 'Energi', caffeine: 'Kafein', state: 'Prinsip', relentless: 'Tanpa Henti' },
            },
            timeline: {
                title: "Perjalanan", titleHighlight: "Hidup",
                items: {
                    item1: {
                        year: "2022 - 2025", title: "SMK TI Annajiyah Bahrul Ulum", subtitle: "Sekolah Menengah Kejuruan",
                        description: "Alumni SMK TI di Jombang. Menjalani 3 tahun di Pondok Pesantren yang membentuk kedisiplinan tinggi dan fundamental IT yang kuat.",
                        location: 'Jombang, Jawa Timur',
                        tags: ['Informatika', 'Pondok Pesantren']
                    },
                    item2: {
                        year: "2025 - Sekarang", title: "Mahasiswa Informatika", subtitle: "Universitas Muhammadiyah Surabaya",
                        description: "Mahasiswa Informatika yang fokus pada Web Development, AI, dan Robotics. Membangun fondasi sistem yang skalabel.",
                        location: 'Surabaya, Jawa Timur',
                        tags: ['Akademik', 'Full Stack']
                    }
                }
            },
            hobbySection: {
                title: 'Hobi &', titleHighlight: 'Ketertarikan', badge: 'Interests.log',
                items: {
                    coding: { title: "Coding", subtitle: "Arsitektur Sistem", description: "Membangun logika kompleks dan arsitektur sistem yang skalabel menggunakan Go, Rust, dan React." },
                    gaming: { title: "Gaming", subtitle: "Strategi Kompetitif", description: "Menikmati tantangan mekanik dan strategi dalam game kompetitif untuk melatih refleks dan fokus." },
                    music: { title: "Musik", subtitle: "Pengalaman Audio", description: "Menemukan ritme kerja yang sempurna melalui playlist Spotify yang dikurasi khusus." },
                    film: { title: "Film", subtitle: "Bercerita Visual", description: "Mengapresiasi sinematografi dan narasi mendalam sebagai sumber inspirasi kreatif." }
                }
            },
            gallerySection: {
                title: 'Galeri', titleHighlight: 'Saya', subtitle: 'Potret perjalanan saya',
                categories: { all: 'Semua', tech: 'Teknologi', life: 'Kehidupan', setup: 'Setup', design: 'Desain' },
                items: {
                    pondokPesantren: { title: 'Vibes Pondok Pesantren', description: 'Dokumentasi 3 tahun perjalanan di pesantren.' },
                    robotics: { title: 'Riset Robotika', description: 'Eksperimen sensor dan mikrokontroler.' },
                    setup: { title: 'Arsitektur Setup', description: 'Tempat logika dan baris kode tercipta.' },
                    uiDesign: { title: 'Eksplorasi Desain UI', description: 'Eksperimen antarmuka SantriConnect.' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "Dirancang untuk pengalaman digital berkinerja tinggi. Berbasis di Surabaya, Indonesia.",
                directories: "Direktori",
                status: { title: "Status", running: "Berjalan", region: "Wilayah", uptime: "Waktu Aktif" },
                jumpTop: "Kembali Ke Atas"
            }
        },
    },
    jp: {
        translation: {
            navHome: 'ホーム', navAbout: '私について', navTech: 'テクノロジー', navTimeline: 'タイムライン', navHobby: '趣味', navGallery: 'ギャラリー',
            selectTheme: 'テーマ選択', language: '言語',
            hero: {
                badge: 'ビジョナリー フルスタック開発者',
                role: 'フルスタックエンジニア',
                description: '"スケーラブルなエンドツーエンドのソリューションを構築する中級フルスタックエンジニア兼システムアーキテクト。"',
                btnWork: '作品を見る', btnCv: '履歴書を見る',
            },
            about: {
                title: '私について',
                p1: '複雑なロジックと温かいコーヒーに安らぎを見出すテクノロジー愛好家。',
                p2: 'イスラム寄宿学校での3年間は、偉大なことには忍耐と規律が必要であることを教えてくれました。この2つは、今でもバグに直面したりシステムアーキテクチャを設計したりするたびに役立っています。',
                btnDetail: '詳細を見る', location: 'スラバヤ, インドネシア', listening: 'Spotify', gaming: 'ゲーム', movie: '映画',
                values: { philosophy: '哲学', discipline: '規律', fuel: 'エネルギー', caffeine: 'カフェイン', state: '原則', relentless: '絶え間ない' },
            },
            timeline: {
                title: '私の', titleHighlight: '道のり',
                items: {
                    item1: {
                        year: '2022 - 2025', title: 'SMK TI Annajiyah Bahrul Ulum', subtitle: '職業高校',
                        description: 'ジョンバンにあるSMK TIの卒業生。イスラム寄宿学校での3年間は、高い規律と強力なITの基礎を築きました。',
                        location: '東ジャワ州ジョムバン',
                        tags: ['情報学', '寄宿学校']
                    },
                    item2: {
                        year: '2025 - 現在', title: '情報学部の学生', subtitle: 'ムハマディヤ・スラバヤ大学',
                        description: 'Web開発、AI、ロボット工学に焦点を当てた情報学部の学生。スケーラブルなシステムの基盤を構築しています。',
                        location: '東ジャワ州スラバヤ',
                        tags: ['学術', 'フルスタック']
                    }
                }
            },
            hobbySection: {
                title: '私の', titleHighlight: '趣味', badge: '興味.log',
                items: {
                    coding: { title: "プログラミング", subtitle: "システム設計", description: "Go、Rust、Reactを使用して、複雑なロジックとスケーラブルなシステムアーキテクチャを構築します。" },
                    gaming: { title: "ゲーム", subtitle: "競争戦略", description: "反射神経と集中力を鍛えるため、対戦ゲームでのメカニカルな課題と戦略を楽しみます。" },
                    music: { title: "音楽", subtitle: "聴覚体験", description: "特別に厳選されたSpotifyプレイリストを通じて、完璧な作業リズムを見つけます。" },
                    film: { title: "映画", subtitle: "視覚的なストーリーテリング", description: "創造的なインスピレーションの源として、映画撮影と深い物語を評価します。" }
                }
            },
            gallerySection: {
                title: '私の', titleHighlight: 'ギャラリー', subtitle: '私の旅のスナップショット',
                categories: { all: 'すべて', tech: '技術', life: '生活', setup: '設定', design: 'デザイン' },
                items: {
                    pondokPesantren: { title: 'ポンドック・プサントレンの雰囲気', description: 'イスラム寄宿学校での3年間の記録。' },
                    robotics: { title: 'ロボット工学の研究', description: 'センサーとマイクロコントローラーの実験。' },
                    setup: { title: 'セットアップアーキテクチャ', description: 'ロジックとコード行が作成される場所。' },
                    uiDesign: { title: 'UIデザインの探求', description: 'SantriConnectインターフェースの実験。' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "高性能なデジタル体験のために作られました。インドネシア、スラバヤ拠点。",
                directories: "ディレクトリ",
                status: { title: "ステータス", running: "稼働中", region: "地域", uptime: "稼働時間" },
                jumpTop: "トップに戻る"
            }
        },
    },
    ko: {
        translation: {
            navHome: '홈', navAbout: '소개', navTech: '기술', navTimeline: '타임라인', navHobby: '취미', navGallery: '갤러리',
            selectTheme: '테마 선택', language: '언어',
            hero: {
                badge: '비저너리 풀스택 개발자',
                role: '풀스택 개발자',
                description: '"확장 가능한 엔드투엔드 솔루션을 구축하는 중급 풀스택 엔지니어 및 시스템 아키텍트."',
                btnWork: '작품 보기', btnCv: '이력서 보기',
            },
            about: {
                title: '내 소개',
                p1: '복잡한 논리와 따뜻한 커피 한 잔에서 평화를 찾는 기술 애호가.',
                p2: '이슬람 기숙 학교에서의 3년은 위대한 일에는 인내와 규율이 필요하다는 것을 가르쳐 주었습니다. 이 두 가지는 지금도 버그를 직면하거나 시스템 아키텍처를 설계할 때마다 적용하고 있습니다.',
                btnDetail: '자세한 정보', location: '수라바야, 인도네시아', listening: 'Spotify', gaming: '게임', movie: '영화',
                values: { philosophy: '철학', discipline: '규율', fuel: '에너지', caffeine: '카페인', state: '원칙', relentless: '끊임없는' },
            },
            timeline: {
                title: '나의', titleHighlight: '여정',
                items: {
                    item1: {
                        year: '2022 - 2025', title: 'SMK TI Annajiyah Bahrul Ulum', subtitle: '직업 고등학교',
                        description: '좀방에 있는 SMK TI 졸업생. 이슬람 기숙 학교에서의 3년은 높은 규율과 강력한 IT 기초를 형성했습니다.',
                        location: '좀방, 동부 자바',
                        tags: ['정보학', '기숙 학교']
                    },
                    item2: {
                        year: '2025 - 현재', title: '정보학 전공 학생', subtitle: '무함마디야 수라바야 대학교',
                        description: '웹 개발, AI 및 로봇 공학에 중점을 둔 정보학 학생. 확장 가능한 시스템의 기반을 구축합니다.',
                        location: '수라바야, 동부 자바',
                        tags: ['학술', '풀스택']
                    }
                }
            },
            hobbySection: {
                title: '나의', titleHighlight: '취미', badge: '관심사.log',
                items: {
                    coding: { title: "코딩", subtitle: "시스템 아키텍처", description: "Go, Rust, React를 사용하여 복잡한 논리와 확장 가능한 시스템 아키텍처를 구축합니다." },
                    gaming: { title: "게임", subtitle: "경쟁 전략", description: "반사 신경과 집중력을 훈련하기 위해 경쟁 게임에서 기계적인 도전과 전략을 즐깁니다." },
                    music: { title: "음악", subtitle: "청각 경험", description: "특별히 선별된 Spotify 플레이리스트를 통해 완벽한 작업 리듬을 찾습니다." },
                    film: { title: "영화", subtitle: "시각적 스토리텔링", description: "창조적 영감의 원천으로 영화 촬영법과 깊은 내러티브를 감상합니다." }
                }
            },
            gallerySection: {
                title: '나의', titleHighlight: '갤러리', subtitle: '내 여정의 스냅샷',
                categories: { all: '모두', tech: '기술', life: '생활', setup: '설정', design: '디자인' },
                items: {
                    pondokPesantren: { title: '기숙학교 분위기', description: '기숙학교에서의 3년 간의 기록.' },
                    robotics: { title: '로봇 공학 연구', description: '센서 및 마이크로컨트롤러 실험.' },
                    setup: { title: '설정 아키텍처', description: '논리와 코드 줄이 만들어지는 곳.' },
                    uiDesign: { title: 'UI 디자인 탐색', description: 'SantriConnect 인터페이스 실험.' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "고성능 디지털 경험을 위해 제작되었습니다. 인도네시아 수라바야 기반.",
                directories: "디렉토리",
                status: { title: "상태", running: "실행 중", region: "지역", uptime: "가동 시간" },
                jumpTop: "맨 위로"
            }
        },
    },
    zh: {
        translation: {
            navHome: '首页', navAbout: '关于我', navTech: '技术', navTimeline: '时间线', navHobby: '爱好', navGallery: '画廊',
            selectTheme: '选择主题', language: '语言',
            hero: {
                badge: '富有远见的全栈开发者',
                role: '全栈开发人员',
                description: '"构建可扩展端到端解决方案的中级全栈工程师兼系统架构师。"',
                btnWork: '查看我的作品', btnCv: '查看简历',
            },
            about: {
                title: '关于我',
                p1: '一个在复杂逻辑和一杯热咖啡中寻找平静的技术爱好者。',
                p2: '在伊斯兰寄宿学校的3年教会了我，伟大的事情需要耐心和纪律——这不仅是我现在的信条，更是我每次面对漏洞或设计系统架构时所应用的两件事。',
                btnDetail: '关于我的细节', location: '泗水, 印尼', listening: 'Spotify', gaming: '游戏', movie: '电影',
                values: { philosophy: '哲学', discipline: '纪律', fuel: '能量', caffeine: '咖啡因', state: '原则', relentless: '坚持不懈' },
            },
            timeline: {
                title: '我的', titleHighlight: '旅程',
                items: {
                    item1: {
                        year: '2022 - 2025', title: 'SMK TI Annajiyah Bahrul Ulum', subtitle: '职业高中',
                        description: 'Jombang SMK TI 校友。在伊斯兰寄宿学校的三年培养了高度的纪律性和强大的 IT 基础。',
                        location: '东爪哇省 琼邦',
                        tags: ['信息学', '寄宿学校']
                    },
                    item2: {
                        year: '2025 - 至今', title: '信息学学生', subtitle: '泗水穆罕默迪亚大学',
                        description: '专注于 Web 开发、AI 和机器人的信息学学生。构建可扩展系统的基础。',
                        location: '东爪哇省泗水',
                        tags: ['学术', '全栈']
                    }
                }
            },
            hobbySection: {
                title: '我的', titleHighlight: '爱好', badge: '兴趣.log',
                items: {
                    coding: { title: "编程", subtitle: "系统架构", description: "使用 Go、Rust 和 React 构建复杂的逻辑和可扩展的系统架构。" },
                    gaming: { title: "游戏", subtitle: "竞争策略", description: "在竞技游戏中享受机械挑战和策略，以训练反应和专注力。" },
                    music: { title: "音乐", subtitle: "听觉体验", description: "通过精心策划的 Spotify 播放列表寻找完美的工作节奏。" },
                    film: { title: "电影", subtitle: "视觉讲故事", description: "欣赏电影摄影和深刻的叙事作为创作灵感的来源。" }
                }
            },
            gallerySection: {
                title: '我的', titleHighlight: '画廊', subtitle: '我旅程的快照',
                categories: { all: '全部', tech: '技术', life: '生活', setup: '设置', design: '设计' },
                items: {
                    pondokPesantren: { title: '寄宿学校氛围', description: '在寄宿学校3年旅程的记录。' },
                    robotics: { title: '机器人研究', description: '传感器和微控制器实验。' },
                    setup: { title: '设置架构', description: '逻辑和代码行创建的地方。' },
                    uiDesign: { title: 'UI设计探索', description: 'SantriConnect界面实验。' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "为高性能数字体验而打造。总部位于印度尼西亚泗水。",
                directories: "目录",
                status: { title: "状态", running: "运行中", region: "区域", uptime: "运行时间" },
                jumpTop: "맨 위로 돌아가기"
            }
        },
    },
    ar: {
        translation: {
            navHome: 'الرئيسية', navAbout: 'حول', navTech:'التقنيات\n', navTimeline: 'الخط الزمني', navHobby: 'هواية', navGallery: 'معرض الصور',
            selectTheme: 'اختر السمة', language: 'اللغة',
            hero: {
                badge: 'مطور فُل ستاك ذو رؤية',
                role: 'مطور فُل ستاك',
                description: '"مهندس فُل ستاك ومهندس أنظمة متوسط يبني حلولاً شاملة وقابلة للتطوير."',
                btnWork: 'شاهد أعمالي', btnCv: 'عرض السيرة الذاتية',
            },
            about: {
                title: 'عني',
                p1: 'عاشق للتكنولوجيا يجد السلام في المنطق المعقد وفنجان من القهوة الدافئة.',
                p2: 'علمتني 3 سنوات في مدرسة داخلية إسلامية أن الأشياء العظيمة تتطلب الصبر والانضباط - وهما شيئان أطبقهما الآن في كل مرة أواجه فيها خطأ برمجي أو أصمم بنية نظام.',
                btnDetail: 'تفاصيل عني', location: 'سورابايا، إندونيسيا', listening: 'سبوتيفاي', gaming: 'ألعاب', movie: 'سينما',
                values: { philosophy: 'فلسفة', discipline: 'انضباط', fuel: 'طاقة', caffeine: 'كافيين', state: 'مبدأ', relentless: 'لا يلين' },
            },
            timeline: {
                title: 'رحلة', titleHighlight: 'حياتي',
                items: {
                    item1: {
                        year: '2022 - 2025', title: 'SMK TI Annajiyah Bahrul Ulum', subtitle: 'مدرسة مهنية',
                        description: 'خريج SMK TI في جومبانج. أمضيت 3 سنوات في مدرسة داخلية إسلامية شكلت انضباطاً عالياً وأساسيات قوية في تكنولوجيا المعلومات.',
                        location: 'جومبانج، جاوة الشرقية\n',
                        tags: ['المعلوماتية', 'مدرسة داخلية']
                    },
                    item2: {
                        year: '2025 - الحاضر', title: 'طالب معلوماتية', subtitle: 'جامعة المحمدية سورابايا',
                        description: 'طالب معلوماتية يركز على تطوير الويب والذكاء الاصطناعي والروبوتات. بناء أساس للأنظمة القابلة للتطوير.',
                        location: 'سورابايا، جاوة الشرقية\n',
                        tags: ['أكاديمي', 'فُل ستاك']
                    }
                }
            },
            hobbySection: {
                title: 'هواياتي', titleHighlight: 'واهتماماتي', badge: 'سجل_الاهتمامات',
                items: {
                    coding: { title: "برمجة", subtitle: "هندسة النظم", description: "بناء منطق معقد وبنى أنظمة قابلة للتطوير باستخدام Go و Rust و React." },
                    gaming: { title: "ألعاب", subtitle: "استراتيجية تنافسية", description: "الاستمتاع بالتحديات الميكانيكية والاستراتيجيات في الألعاب التنافسية لتدريب ردود الفعل والتركيز." },
                    music: { title: "موسيقى", subtitle: "تجربة سمعية", description: "إيجاد إيقاع العمل المثالي من خلال قوائم تشغيل Spotify المنسقة خصيصًا." },
                    film: { title: "فيلم", subtitle: "رواية القصص المرئية", description: "تقدير التصوير السينمائي والروايات العميقة كمصدر للإلهام الإبداعي." }
                }
            },
            gallerySection: {
                title: 'معرض', titleHighlight: 'الصور الخاص بي', subtitle: 'لقطات من رحلتي',
                categories: { all: 'الكل', tech: 'تكنولوجيا', life: 'حياة', setup: 'إعداد', design: 'تصميم' },
                items: {
                    pondokPesantren: { title: 'أجواء المدرسة الداخلية', description: 'توثيق 3 سنوات من الرحلة في المدرسة الداخلية.' },
                    robotics: { title: 'أبحاث الروبوتات', description: 'تجارب أجهزة الاستشعار والمتحكمات الدقيقة.' },
                    setup: { title: 'هندسة الإعداد', description: 'حيث يتم إنشاء المنطق وخطوط التعليمات البرمجية.' },
                    uiDesign: { title: 'استكشاف تصميم واجهة المستخدم', description: 'تجارب واجهة SantriConnect.' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "مصمم لتجارب رقمية عالية الأداء. مقرنا في سورابايا، إندونيسيا.",
                directories: "الدلائل",
                status: { title: "الحالة", running: "قيد التشغيل", region: "المنطقة", uptime: "وقت التشغيل" },
                jumpTop: "العودة إلى الأعلى"
            }
        },
    },
    es: {
        translation: {
            navHome: 'Inicio', navAbout: 'Acerca de', navTech: 'Tecnologías', navTimeline: 'Cronología', navHobby: 'Pasatiempo', navGallery: 'Galería',
            selectTheme: 'Seleccionar Tema', language: 'Idioma',
            hero: {
                badge: 'Desarrollador Full Stack Visionario',
                role: 'Desarrollador Full Stack',
                description: '"Ingeniero Full Stack Intermedio y Arquxitecto de Sistemas que crea soluciones escalables de extremo a extremo."',
                btnWork: 'Ver mi trabajo', btnCv: 'Ver CV',
            },
            about: {
                title: 'Sobre Mí',
                p1: 'Un entusiasta de la tecnología que encuentra la paz en la lógica compleja y una taza de café caliente.',
                p2: 'Mis 3 años en un internado islámico me enseñaron que las grandes cosas requieren paciencia y disciplina, dos cosas que ahora aplico cada vez que me enfrento a un error o diseño la arquitectura de un sistema.',
                btnDetail: 'Detalles sobre mí', location: 'Surabaya, ID', listening: 'Spotify', gaming: 'Videojuegos', movie: 'Cine',
                values: { philosophy: 'Filosofía', discipline: 'Disciplina', fuel: 'Energía', caffeine: 'Cafeína', state: 'Principio', relentless: 'Implacable' },
            },
            timeline: {
                title: 'Mi', titleHighlight: 'Viaje',
                items: {
                    item1: {
                        year: '2022 - 2025', title: 'SMK TI Annajiyah Bahrul Ulum', subtitle: 'Escuela Secundaria Vocacional',
                        description: 'Exalumno de SMK TI en Jombang. Pasé 3 años en un internado islámico que forjó una alta disciplina y sólidos fundamentos en TI.',
                        location: 'Jombang, Java Oriental',
                        tags: ['Informática', 'Internado']
                    },
                    item2: {
                        year: '2025 - Presente', title: 'Estudiante de Informática', subtitle: 'Universidad Muhammadiyah de Surabaya',
                        description: 'Estudiante de informática centrado en desarrollo web, IA y robótica. Construyendo bases para sistemas escalables.',
                        location: 'Surabaya, Java Oriental',
                        tags: ['Académico', 'Full Stack']
                    }
                }
            },
            hobbySection: {
                title: 'Mis', titleHighlight: 'Pasatiempos', badge: 'Intereses.log',
                items: {
                    coding: { title: "Programación", subtitle: "Arquitectura de Sistemas", description: "Construyendo lógica compleja y arquitecturas de sistemas escalables utilizando Go, Rust y React." },
                    gaming: { title: "Videojuegos", subtitle: "Estrategia Competitiva", description: "Disfrutando de los desafíos mecánicos y estrategias en juegos competitivos para entrenar reflejos y concentración." },
                    music: { title: "Música", subtitle: "Experiencia Auditiva", description: "Encontrando el ritmo de trabajo perfecto a través de listas de reproducción de Spotify especialmente seleccionadas." },
                    film: { title: "Cine", subtitle: "Narración Visual", description: "Apreciando la cinematografía y las narrativas profundas como fuente de inspiración creativa." }
                }
            },
            gallerySection: {
                title: 'Mi', titleHighlight: 'Galería', subtitle: 'Instantánea de mi viaje',
                categories: { all: 'Todo', tech: 'Tecnología', life: 'Vida', setup: 'Configuración', design: 'Desino' },
                items: {
                    pondokPesantren: { title: 'Vibraciones del internado', description: 'Documentación de 3 años de viaje en el internado.' },
                    robotics: { title: 'Investigación en robótica', description: 'Experimentos con sensores y microcontroladores.' },
                    setup: { title: 'Arquitectura de configuración', description: 'Donde se crean la lógica y las líneas de código.' },
                    uiDesign: { title: 'Exploración de diseño de UI', description: 'Experimentos de interfaz de SantriConnect.' }
                }
            },
            footer: {
                brand: "KAIZER.LOG",
                desc: "Creado para experiencias digitales de alto rendimiento. Con sede en Surabaya, Indonesia.",
                directories: "Directorios",
                status: { title: "Estado", running: "En ejecución", region: "Región", uptime: "Tiempo de actividad" },
                jumpTop: "Volver arriba"
            }
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;

