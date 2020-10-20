import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';

Vue.use(VueI18n)

Vue.config.productionTip = false
console.info("VUE: ", Vue.version);
console.info("VER: ", process.env.VUE_APP_VER);
let userLang = navigator.language || navigator.userLanguage;
console.log("userLang ", userLang);

const messages = {
	en: {
		message: {
			hello: '1'
		},
		menu: {
			features: 'Features',
			integration: 'Integrations',
			team: 'Team',
			partners: 'Partners',
			faq: 'F.A.Q.',
			media: 'Media',
			pricing: 'Pricing',
			lang: 'Eng'
		},
		button: {
			request: 'Get a demo',
			send: 'Send demo request',
			subscribe: 'Subscribe'
		},
		promo: {
			h1: 'EdCAS - Education & Corporate Accelerator Services',
			h2: 'Next level of education in your company.',
			h4: 'You will get all of this just in one window:',
			list: {
				el1: 'Course designer with application adaptive learning algorithms.',
				el2: 'Open API for integration with outside services and opportunity own creations platform extensions.'
			}
		},
		features: {
			title: 'Core Features',
			blocks: {
				1: {
					title: 'Course Designer',
					text: 'We work not only with students, but also with the convenience of our platform for teachers and HR. Ease of use, usability and functionality - this is what we have combined in our platform.'
				},
				2: {
					title: 'Card Methodology',
					text: 'Scroll, study, save. Creating our methodology, we proceeded from the simplest. Testing for more than two years, we came to the most convenient training format that meets the latest standards.'
				},
				3: {
					title: 'Advanced Analytics',
					text: 'In modern realities, we understand that it’s not enough just to create a platform for staff training. Our analytics platform will find and tell you a bottleneck in your course.'
				},
				4: {
					title: 'Wherever There is Internet',
					text: 'Your employees can be trained in any place convenient for them. From almost any device. For use of our platform, all you need is just access to internet.'
				},
				5: {
					title: 'Control Everything',
					text: 'Create groups, departments, appoint administrators, add teachers - all this is available to you in a couple of clicks. And also, configure the rights both for groups and separately for each employee.'
				},
				6: {
					title: 'EdCAS - Exclusively Yours',
					text: 'We have a complete white label solution. change logos, choose a color scheme in the style of your company.'
				}
			}
		},
		team: {
		  title: 'Team',
			cpo: {
				name: 'Vyacheslav Kalaushin',
				position: 'Founder and CPO',
				text: 'Serial entrepreneur, visionary, futurist. Expert in the field of education. \n' +
						'\n' +
						'In the past, co-founder of Toefl / Ielts training schools. More than 6 years of experience starting a business from scratch, more than 4 years in the field of education.\n' +
						'\n' +
						'Skills: building a strong team, finding a market and customers, negotiating and creating innovative products. \n',
			},
			coo: {
				name: 'Denis Kostikov',
				position: 'Co-Founder and COO',
				text: 'Specialist with 6 years of experience in team management and community relations. Helped build a strong, loyal community for several projects. Over 2 years he worked in an international team and had experience in various fields, such as the financial sector, telecommunications, healthcare, agriculture, entertainment.',
			},
			cdo: {
				name: 'Yuri Smirnov',
				position: 'Co-Founder and CDO',
				text: 'Design director with over 8 years of experience in the field of design. He worked in design studios, as well as in corporate-level companies and fast-growing startups around the world. Throughout his career, he has been engaged in the design and design of interfaces, the creation of system design, the selection and training of designers. ',
			},
			cto: {
				name: 'Dmitriy Ivanov',
				position: 'Co-Founder and CTO',
				text: 'A specialist with more than 12 years of experience developing complex corporate solutions in the areas of analytics, big data, CRM and ERP systems. Among the companies of Dmitry: Stanford University, Vkontakte',
			}
		},
		partners: {
		  title: 'Partners'
    },
		faq: {
      q1: {
        t: 'What are you getting?',
        a: 'A cloud solution for staff training and analytics'
      },
      q2: {
        t: 'Can this be deployed on the company local network?',
        a: 'Yes, but in this case you are buying a boxed solution.'
      },
      q3: {
        t: 'Are there integrations with other cloud services?',
        a: 'Of course, moreover, we love integration. And if you have not found a suitable integration, our company will do it for you'
      },
      q4: {
        t: 'Can I test the platform before paying for access?',
        a: 'Yes, we provide 10 days of trial use'
      },
      q5: {
        t: 'Why are you better than others?',
        a: 'We can talk a lot about our advantages, but why? Try our platform and you will understand what we are better'
      },
      q6: {
        t: 'We want to use your solution, but we are afraid of migration.',
        a: 'We will transfer employees and courses from the previous platform to ours for free.'
      },
      q7: {
        t: 'We are an NGO / university / college / school / online school, will your platform suit us?',
        a: 'For sure'
      },
      q8: {
        t: 'We do not quite understand how everything works, but really want to use your solution',
        a: 'Great! Thanks to online tutorials on how to use the platform and helpdesk, you can easily learn how to use EdCAS'
      },
      q9: {
        t: 'Do you create educational material?',
        a: 'No, we provide exclusively a platform on which you and third parties can create material to which you will open access.'
      }
    },
    media: { title: 'Media'},
		pricing: {
		  title: 'Pricing',
      title_btn: 'Number of Employees:',
      monthly: 'Monthly',
      quarterly: 'Quarterly',
      yearly: 'Yearly',
      period: 'Month',
      description: 'Price for 1 employee'
    },
		footer: {
      text: 'We create products that change the world of digital education. The main value of our company is the\n' +
          '              innovative spirit that has permeated our company\'s product from and to. Therefore, when creating EdCAS, we\n' +
          '              apply the most innovative technologies and knowledge available today.\n' +
          '\n' +
          '              Create, improve, surprise.',
      sub: 'Subscribe to Newsletters',
      placeholder: 'Enter your email',
      social: 'Our Socials'
    }
	},
	ru: {
		message: {
			hello: '2'
		},
		menu: {
			features: 'Особенности',
			integration: 'Интеграции',
			team: 'Команда',
			partners: 'Партнеры',
			faq: 'F.A.Q.',
			media: 'Пресса',
			pricing: 'Стоимость',
			lang: 'Rus'
		},
		button: {
			request: 'Смотреть демо',
			send: 'Запросить демо',
			subscribe: 'Подписаться'
		},
		promo: {
			h1: 'EdCAS - Education & Corporate Accelerator Services',
			h2: 'Следующий уровень корпоративного обучения',
			h4: 'Все это вы получаете в одном месте:',
			list: {
				el1: 'Создание курса с применением адаптивных алгоритмов обучения.',
				el2: 'Открытый API для интеграции со сторонними сервисами и возможность создания собственных расширений платформы.'
			}
		},
		features: {
			title: 'Главные особенности',
			blocks: {
				1: {
					title: 'Конструктор курсов',
					text: 'Мы заботимся не только о студентах, но и об удобстве нашей платформы для преподавателей и HR.  Простота в использовании, удобство и функциональность - именно то, Что мы объединили в нашем конструкторе.'
				},
				2: {
					title: 'Карточная методология',
					text: 'Листайте, изучайте, сохраняйте. Создавая нашу методологию, мы исходили от самого простого. Тестируя больше двух лет, мы пришли к наиболее удобному формату обучения, отвечающему самым современным стандартам. '
				},
				3: {
					title: 'Продвинутая аналитика',
					text: 'В современных реалиях, мы понимаем, Что недостаточно просто создать платформу для обучения персонала. Наша платформа аналитики найдет и подскажет вам узкое место в вашем курсе.'
				},
				4: {
					title: 'Везде где есть интернет',
					text: 'Ваши сотрудники могут проходить обучение в любом удобном для них месте. Практически с любого устройства. Для полноценного использования нашей платформы достаточно выхода в интернет.\n'
				},
				5: {
					title: 'Управляйте',
					text: 'Создавайте группы, департаменты, назначайте администраторов, добавляйте преподавателей - все это доступно вам за пару кликов. А также, настраивайте права как для групп, так и отдельно для каждого сотрудника.\n'
				},
				6: {
					title: 'EdCAS - исключительно Ваш',
					text: 'У нас полноценное white label решение. меняйте логотипы, выбирайте цветовую схему в стилистики вашей компании.'
				},
			}
		},
		team: {
		  title: 'Команда',
			cpo: {
				name: 'Вячеслав Калаушин',
				position: 'Основатель и продуктовый архитектор',
				text: 'Серийный предприниматель, визионер, футурист. Эксперт в области образования.\n' +
            '\n' +
            'В прошлом, сооснователь школ подготовки к Toefl/Ielts.\n' +
            'Более чем 6 летний стаж создания бизнеса с нуля, более 4 лет в сфере образования.\n' +
            '\n' +
            'Сильные стороны: создания сильной команды, нахождение рынка и клиентов, ведение переговоров и создания инновационных продуктов.\n',
			},
			coo: {
				name: 'Денис Костиков',
				position: 'Сооснователь и проджект менеджер',
				text: 'Специалист с 6-летним опытом командного управления и общественного строительства. Я помог построить сильное, лояльное сообщество для нескольких проектов. Более 2 лет работал в международной команде и имел опыт работы в различных областях, таких как финансовый сектор, телекоммуникации, здравоохранение, сельское хозяйство, развлечения.\n',
			},
			cdo: {
				name: 'Юрий Смирнов',
				position: 'Сооснователь и дизайн директор',
				text: 'Дизайн директор с более чем 8-летним опытом работы в сфере дизайна. Работал в дизайн-студиях, а также в компаниях корпоративного уровня и быстрорастущих стартапах по всему миру. На протяжении всей своей карьеры занимался проектированием и дизайном интерфейсов, созданием дизайн систем, подбором и обучением дизайнеров.',
			},
			cto: {
				name: 'Дмитрий Иванов',
				position: 'Сооснователь и технический директор',
				text: 'Специалист более чем с 12 летним опытом разработки сложных корпоративных решений в области аналитики, больших данных, CRM и ERP систем. В числе компаний Дмитрия: Stanford University, Вконтакте',
			}
		},
		partners: {
		  title: 'Партнеры'
    },
		faq: {
      q1: {
        t: 'Что вы получаете?',
        a: 'Облачное решение для обучения и аналитики персонала.'
      },
      q2: {
        t: 'Это можно развернуть на локальной сети компании?',
        a: 'Да, однако в таком случае вы покупаете коробочное решение.'
      },
      q3: {
        t: 'Имеются ли интеграции с другими облачными сервисами?',
        a: 'Конечно, более того, мы любим интеграции. И если у вы не нашли подходящей интеграции, наша компания сделаем вам ее.'
      },
      q4: {
        t: 'Могу ли я протестировать платформу, прежде чем оплачивать доступ?',
        a: 'Да, мы предоставляем 10 дней пробного использования.'
      },
      q5: {
        t: 'Чем вы лучше других решений?',
        a: 'Мы можем много говорить о наших преимуществах, но зачем? Попробуйте нашу платформу и вы поймете, чем мы лучше.'
      },
      q6: {
        t: 'Хотим использовать ваше решение, но боимся переезда.',
        a: 'Ничего страшного, мы бесплатно перенесем сотрудников и курсы с предыдущей платформы на нашу.'
      },
      q7: {
        t: 'Мы НКО/университет/колледж/школа/онлайн школа, подойдет ли ваша платформа нам?',
        a: 'Да, конечно.'
      },
      q8: {
        t: 'Мы не совсем понимаем как все работает, но очень хотим использовать ваше решение',
        a: 'Замечательно, это не проблема. Благодаря интерактивному обучению использованию платформы и службе поддержки вы с легкостью разберетесь в использовании EdCAS'
      },
      q9: {
        t: 'Вы создаете образовательный материал?',
        a: 'Нет, мы предоставляем исключительно платформу, на которой создавать материал можете как вы, так и третьи лица, которым вы откроете доступ.'
      }
    },
    media: { title: 'Пресса'},
		pricing: {
      title: 'Стоимость',
      title_btn: 'Колич. сотрудников',
      monthly: 'Ежемесячно',
      quarterly: 'Ежеквартально',
      yearly: 'Ежегодно',
      period: 'Месяц',
      description: 'Стоимость за одного сотрудника'
    },
		footer: {
		  text: 'Мы создаем продукты которые меняют принципы цифрового обучения. Основной ценностью нашей компании является инновационный дух, который пронизывает нашу продукцию от и до. Поэтому при создании EdCAS мы применяем самые инновационные технологии и знания, доступные сегодня.',
      sub: 'Подписаться на новости',
      social: 'Мы в соц. сетях',
      placeholder: 'Введите ваш E-mail'
    }
	}
}
const i18n = new VueI18n({
	locale: 'en', // set locale
	messages // set locale messages
})

new Vue({
	i18n,
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
