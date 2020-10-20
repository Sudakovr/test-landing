<template>
  <v-app class="edcas">
    <section id="home">
      <div class="header">
        <div class="logotype">
          <img src="/edcas.svg" alt="">
        </div>
        <div class="head-menu">
          <div class="head-menu-item" @click="scrollMeTo('features')">{{ $t("menu.features") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('integration')">{{ $t("menu.integration") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('team')">{{ $t("menu.team") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('partners')">{{ $t("menu.partners") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('faq')">{{ $t("menu.faq") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('media')">{{ $t("menu.media") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('pricing')">{{ $t("menu.pricing") }}</div>
          <div class="head-menu-item dropdown" v-on:click="switchLocaleMenu('lang')">
            {{ $t("menu.lang")}} <img src="/icon/arrow_down.svg" alt="" id="arrow" style="transform: rotate(180deg);">

            <div class="lang" id="lang" style="display: none">
              <div class="item" v-on:click="switchLocale('en')">ENG</div>
              <div class="item" v-on:click="switchLocale('ru')">RUS</div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <v-dialog
              v-model="dialog"
              width="880"
          >
            <template v-slot:activator="{ on }">
              <button class="request" v-on="on">{{ $t("button.request")}}</button>

            </template>

            <v-card>
              <v-card-title
                  class="modal-header"
                  primary-title
              >
                <span>Demo Request</span>
              </v-card-title>

              <v-card-text>
                <form id="formtop">
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" lg="6" xs="12">
                        <div class="input">
                          <input type="text" v-model="formtop.topname" id="topname" placeholder="Your Name"/>
                          <span style="color: red;display: none;margin-left: 20px;"
                                id="validtopname">Не указано имя</span>
                        </div>
                        <div class="input">
                          <input type="text" v-model="formtop.topposition" id="topposition"
                                 placeholder="Your Position in Company"/>
                          <span style="color: red;display: none;margin-left: 20px;" id="validtopposition">Не указана компания</span>
                        </div>
                      </v-col>
                      <v-col cols="12" lg="6" xs="12">
                        <div class="input">
                          <input type="text" v-model="formtop.topcompany" id="topcompany" placeholder="Company Name"/>
                          <span style="color: red;display: none;margin-left: 20px;" id="validtopcompany">Не указана компания</span>
                        </div>
                        <div class="input">
                          <input type="text" v-model="formtop.topemail" id="topemail"
                                 placeholder="Your Contact Email"/>
                          <span style="color: red;display: none;margin-left: 20px;"
                                id="validtopemail">не верный емайл</span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" lg="12" xs="12">
                        <div class="block-btn">
                          <!--                          @click="dialog = false"-->
                          <buton class="modal-btn" id="topbutton" @click="sendmailtop()">{{ $t('button.send')}}</buton>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>

        <div class="xs-menu">
          <img src="/el/menu.svg" alt="" v-on:click="activationMenu()">
        </div>
      </div>
      <div class="home"></div>

      <div class="xs-modal-menu" id="xs-menu" style="display: none">
        <div style="display: flex;align-items: center;justify-content: space-between;margin: 15px 25px;">
          <img src="/edcas.svg" alt="">
          <div style="cursor: pointer" v-on:click="activationMenu()">X</div>
        </div>

        <div class="link-menu">
          <div class="head-menu-item" @click="scrollMeTo('features')">{{ $t("menu.features") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('integration')">{{ $t("menu.integration") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('team')">{{ $t("menu.team") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('partners')">{{ $t("menu.partners") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('faq')">{{ $t("menu.faq") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('media')">{{ $t("menu.media") }}</div>
          <div class="head-menu-item" @click="scrollMeTo('pricing')">{{ $t("menu.pricing") }}</div>
          <div class="head-menu-item dropdown" v-on:click="switchLocaleMenu('lang2')">
            {{ $t("menu.lang")}} <img src="/icon/arrow_down.svg" alt="" id="arrow2" style="transform: rotate(180deg);">

            <div class="lang" id="lang2" style="display: none">
              <div class="item" v-on:click="switchLocale('en')">ENG</div>
              <div class="item" v-on:click="switchLocale('ru')">RUS</div>
            </div>
          </div>
        </div>


      </div>

    </section>
    <section id="promo" ref="promo">
      <div class="text">
        <h1>{{ $t("promo.h1")}}</h1>
        <h2>{{ $t("promo.h2")}}</h2>
        <h4>{{ $t("promo.h4")}}</h4>

        <ul class="promo-list">
          <li><p>{{ $t("promo.list.el1")}}</p></li>
          <li><p>{{ $t("promo.list.el2")}}</p></li>
        </ul>

        <v-dialog
            v-model="dialog2"
            width="880"
        >
          <template v-slot:activator="{ on }">
            <button class="request" v-on="on">{{ $t("button.request")}}</button>
          </template>

          <v-card>
            <v-card-title
                class="modal-header"
                primary-title
            >
              <span>Demo Request</span>
            </v-card-title>

            <v-card-text>
              <form id="formtop1">
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" lg="6" xs="12">
                      <div class="input">
                        <input type="text" v-model="formtop1.topname1" id="topname1" placeholder="Your Name"/>
                        <span style="color: red;display: none;margin-left: 20px;"
                              id="validtopname1">Не указано имя</span>
                      </div>
                      <div class="input">
                        <input type="text" v-model="formtop1.topposition1" id="topposition1"
                               placeholder="Your Position in Company"/>
                        <span style="color: red;display: none;margin-left: 20px;" id="validtopposition1">Не указана компания</span>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6" xs="12">
                      <div class="input">
                        <input type="text" v-model="formtop1.topcompany1" id="topcompany1" placeholder="Company Name"/>
                        <span style="color: red;display: none;margin-left: 20px;" id="validtopcompany1">Не указана компания</span>
                      </div>
                      <div class="input">
                        <input type="text" v-model="formtop1.topemail1" id="topemail1"
                               placeholder="Your Contact Email"/>
                        <span style="color: red;display: none;margin-left: 20px;"
                              id="validtopemail1">не верный емайл</span>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" lg="12" xs="12">
                      <div class="block-btn">
                        <!--                          @click="dialog = false"-->
                        <buton class="modal-btn" id="topbutton1" @click="sendmailtop1()">{{ $t('button.send')}}</buton>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <div class="social">
          <a href="https://www.linkedin.com/company/education-universe-llc/" class="social-link" target="_blank">
            <img src="/social/linkedin.svg" alt="linkedin">
          </a>
          <a href="https://vk.com/edcas_io" class="social-link" target="_blank">
            <img src="/social/vk.svg" alt="vkontakte">
          </a>
          <a href="https://www.instagram.com/edcas.io/" class="social-link" target="_blank">
            <img src="/social/instagram.svg" alt="instagram">
          </a>
        </div>

      </div>
      <div class="banner">
        <img src="/el/ipad.png" alt="" style="width: 400px;">
      </div>
    </section>
    <section id="features" ref="features">
      <div class="bg"></div>
      <div class="oval-bg"></div>
      <div class="dots"></div>
      <div class="content">
        <div class="title">
          {{ $t("features.title")}}
          <span></span>
        </div>

        <div class="blocks">
          <div class="block">
            <img src="/icon/icn-1.svg" alt="">
            <div class="title">{{ $t("features.blocks.1.title")}}</div>
            <span>
            {{ $t("features.blocks.1.text")}}
          </span>
          </div>
          <div class="block">
            <img src="/icon/icn-2.svg" alt="">
            <div class="title">{{ $t("features.blocks.2.title")}}</div>
            <span>
            {{ $t("features.blocks.2.text")}}
          </span>
          </div>
          <div class="block">
            <img src="/icon/icn-3.svg" alt="">
            <div class="title">{{ $t("features.blocks.3.title")}}</div>
            <span>
            {{ $t("features.blocks.3.text")}}
          </span>
          </div>
          <div class="block">
            <img src="/icon/icn-4.svg" alt="">
            <div class="title">{{ $t("features.blocks.4.title")}}</div>
            <span>
            {{ $t("features.blocks.4.text")}}
          </span>
          </div>
          <div class="block">
            <img src="/icon/icn-5.svg" alt="">
            <div class="title">{{ $t("features.blocks.5.title")}}</div>
            <span>
            {{ $t("features.blocks.5.text")}}
          </span>
          </div>
          <div class="block">
            <img src="/icon/icn-6.svg" alt="">
            <div class="title">{{ $t("features.blocks.6.title")}}</div>
            <span>
            {{ $t("features.blocks.6.text")}}
          </span>
          </div>
        </div>
      </div>
    </section>
    <section id="integration" ref="integration">
      <div class="bg"></div>
      <div class="dots"></div>
      <div class="content">
        <div class="title">Мы открыты к интеграции</div>
        <div class="blocks">
          <div class="block">
            <div class="title-i">Протоколы</div>
            <div class="logos">
              <img src="/content/SCORM.png" alt="" style="width: 130px;">
              <img src="/content/xAPI.png" alt="" style="width: 130px;">
              <img src="/content/TinCan.png" alt="" style="width: 130px;">
            </div>
          </div>
          <div class="block">
            <div class="title-i">Трекеры</div>
            <div class="logos">
              <img src="/content/basecamp.png" alt="" style="width: 130px;">
              <img src="/content/trello.png" alt="" style="width: 130px;">
              <img src="/content/slack.png" alt="" style="width: 130px;">
            </div>
          </div>
          <div class="block">
            <div class="title-i">Работа внутри</div>
            <div class="logos">
              <img src="/content/miro.png" alt="" style="width: 130px;">
              <img src="/content/figma.png" alt="" style="width: 130px;">
              <img src="/content/webjets.png" alt="" style="width: 130px;">
            </div>
          </div>
          <div class="block">
            <div class="title-i">Автоматизаторы</div>
            <div class="logos">
              <img src="/content/webhooks.png" alt="" style="width: 130px;">
              <img src="/content/zapier.png" alt="" style="width: 130px;">
            </div>
          </div>
        </div>

        <div class="text">
          Не нашли нужную интеграцию? Уточните наличие интересующих интеграций у нас: <a href="mailto:contact@edcas.io">contact@edcas.io</a>
        </div>

      </div>


    </section>
    <section id="team" ref="team">
      <div class="oval-bg"></div>
      <div class="content">
        <div class="avatars">
          <div class="pic1"></div>
          <div class="pic2"></div>
          <div class="pic3"></div>
          <div class="pic4"></div>
        </div>
        <div class="blocks">
          <div class="title">
            {{ $t("team.title")}}
            <div>
            <span class="slider-btn">
              <img src="/icon/arrow-left.svg" alt="" @click="move(-1)">
            </span>
              <span class="slider-btn action">
              <img src="/icon/arrow-right.svg" alt="" @click="move(1)">
            </span>
            </div>

          </div>
          <div class="slide">
            <transition-group
                name="slide"
                mode="out-in"
                enter-class="slide-in"
                leave-class="slide-out"
                enter-active-class="animated slide-in-active"
                leave-active-class="animated slide-out-active"
            >
              <div v-if="1 == active" key="1">
                <div class="name">{{ $t("team.cpo.name")}}</div>
                <div class="position">{{ $t("team.cpo.position")}}</div>
                <div class="text">
                  <p>{{ $t("team.cpo.text")}}</p>
                </div>
                <div class="links">
                  <a href="https://www.linkedin.com/in/kalaushin/" target="_blank">
                    <img src="/social/linkedin.svg" alt="linkedin">
                  </a>
                  <a href="https://www.instagram.com/v.kalaushin/" target="_blank">
                    <img src="/social/instagram.svg" alt="instagram">
                  </a>
                </div>
              </div>
              <div v-if="2 == active" key="2">
                <div class="name">{{ $t("team.coo.name")}}</div>
                <div class="position">{{ $t("team.coo.position")}}</div>
                <div class="text">
                  <p>{{ $t("team.coo.text")}}</p>
                </div>
                <div class="links">
                  <a href="http://linkedin.com/in/denis-kostikov" target="_blank">
                    <img src="/social/linkedin.svg" alt="linkedin">
                  </a>

                </div>
              </div>
              <div v-if="3 == active" key="3">
                <div class="name">{{ $t("team.cdo.name")}}</div>
                <div class="position">{{ $t("team.cdo.position")}}</div>
                <div class="text">
                  <p>{{ $t("team.cdo.text")}}</p>
                </div>
                <div class="links">
                  <a href="https://www.linkedin.com/in/yurysmirnovdesign/" target="_blank">
                    <img src="/social/linkedin.svg" alt="linkedin">
                  </a>

                  <a href="https://www.instagram.com/juranimo.design/" target="_blank">
                    <img src="/social/instagram.svg" alt="instagram">
                  </a>
                </div>
              </div>

              <div v-if="4 == active" key="4">
                <div class="name">{{ $t("team.cto.name")}}</div>
                <div class="position">{{ $t("team.cto.position")}}</div>
                <div class="text">
                  <p>{{ $t("team.cto.text")}}</p>
                </div>
                <div class="links">

                </div>
              </div>

            </transition-group>

          </div>
        </div>
      </div>


    </section>
    <section id="partners" ref="partners">
      <div class="bg"></div>
      <div class="dots"></div>
      <div class="content">
        <div class="title">{{ $t("partners.title")}}
          <div>
            <span class="slider-btn" @click="partnersMove(-50)">
              <img src="/icon/arrow-left.svg" alt="">
            </span>
            <span class="slider-btn action" @click="partnersMove(+50)">
              <img src="/icon/arrow-right.svg" alt="">
            </span>
          </div>
        </div>
        <div class="blocks">
          <div class="slider" style="margin-left: 0px" id="partner_slider">
            <a href="https://gotech.vc/" target="_blank">
              <img src="/content/partners/gotech.png" alt="">
            </a>
            <a href="https://www.webjets.io/" target="_blank">
              <img src="/content/partners/webjets.png" alt="">
            </a>
            <a href="https://startup-lab.ru/" target="_blank">
              <img src="/content/partners/startuo-lab.png" alt="">
            </a>
            <a href="https://spb.hse.ru/en/" target="_blank">
              <img src="/content/partners/school-ec.png" alt="">
            </a>
            <a href="https://product.vision/" target="_blank">
              <img src="/content/partners/product-vision.png" alt="">
            </a>
            <a href="https://www.startaventures.com/" target="_blank">
              <img src="/content/partners/strata-ventures.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="faq" ref="faq">
      <div class="content">
        <div class="title">F.A.Q</div>
        <div class="list">

          <v-expansion-panels accordion>
            <v-expansion-panel key="1">
              <v-expansion-panel-header>
                {{ $t("faq.q1.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q1.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel key="2">
              <v-expansion-panel-header>
                {{ $t("faq.q2.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q2.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="3">
              <v-expansion-panel-header>
                {{ $t("faq.q3.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q3.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="4">
              <v-expansion-panel-header>
                {{ $t("faq.q4.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q4.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="5">
              <v-expansion-panel-header>
                {{ $t("faq.q5.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q5.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="6">
              <v-expansion-panel-header>
                {{ $t("faq.q6.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q6.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="7">
              <v-expansion-panel-header>
                {{ $t("faq.q7.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q7.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="8">
              <v-expansion-panel-header>
                {{ $t("faq.q8.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q8.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel key="9">
              <v-expansion-panel-header>
                {{ $t("faq.q9.t")}}
                <template v-slot:actions>
                  <v-icon color="error">mdi-plus</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t("faq.q9.a")}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>

    </section>
    <section id="media" ref="media">
      <div class="bg"></div>
      <div class="dots"></div>
      <div class="decor"></div>
      <div class="content">
        <div class="title">{{ $t("media.title")}}
          <div>
            <span class="slider-btn" @click="mediaMove(-50)">
              <img src="/icon/arrow-left.svg" alt="">
            </span>
            <span class="slider-btn action" @click="mediaMove(+50)">
              <img src="/icon/arrow-right.svg" alt="">
            </span>
          </div>
        </div>
        <div class="blocks">
          <div class="slider" id="media_slider" style="margin-left: 0">
            <a href="#" v-if=" $t('message.hello') == 1">
              <div class="blk">
                <img src="/content/media/media1.png" alt="">
                <p>What's going on inside every startup. History on the example of Education Universe LLC</p>
              </div>
            </a>
            <a href="#" v-if=" $t('message.hello') == 1">
              <div class="blk">
                <img src="/content/media/media2.png" alt="">
                <p>List of participants of the
                  Go Estonia pitch session</p>
              </div>
            </a>

            <a href="#" v-if=" $t('message.hello') == 2">
              <div class="blk">
                <img src="/content/media/media3.png" alt="">
                <p>Платформа для подготовки к ЕГЭ и генератор стикеров. Как прошла...</p>
              </div>
            </a>
            <a href="#" v-if=" $t('message.hello') == 2">
              <div class="blk">
                <img src="/content/media/media4.png" alt="">
                <p>Проект EdWay нашел инвестора. Маркетплейс образовательных услуг...</p>
              </div>
            </a>
            <a href="#" v-if=" $t('message.hello') == 2">
              <div class="blk">
                <img src="/content/media/media5.png" alt="">
                <p>Онлайн образование. Стоит ли открывать стартап в 2019</p>
              </div>
            </a>
            <a href="#" v-if=" $t('message.hello') == 2">
              <div class="blk">
                <img src="/content/media/media6.png" alt="">
                <p>Финалисты специальных номинаций GoTech 2018</p>
              </div>
            </a>
            <a href="#" v-if=" $t('message.hello') == 2">
              <div class="blk">
                <img src="/content/media/media7.png" alt="">
                <p>Startup Lab. Выпуск второго потока акселератора</p>
              </div>
            </a>
            <a href="#" v-if=" $t('message.hello') == 2">
              <div class="blk">
                <img src="/content/media/media8.png" alt="">
                <p>Стартап который смог</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </section>
    <section id="pricing" ref="pricing">
      <div class="content">
        <div class="title">{{ $t("pricing.title")}}</div>
        <div class="table">
          <div class="string">
            <div class="string-title bold">{{ $t("pricing.title_btn")}}</div>
            <div class="right" id="price_btn">
              <button class="table-btn" @click="changePrice(0)">10+</button>
              <button class="table-btn action" @click="changePrice(1)">50+</button>
              <button class="table-btn" @click="changePrice(2)">100+</button>
              <button class="table-btn" @click="changePrice(3)">500+</button>
              <button class="table-btn" @click="changePrice(4)">1000+</button>
            </div>
          </div>
          <div class="string border">
            <div class="string-title">{{ $t("pricing.monthly")}}</div>
            <div class="right" id="price1">
              <div class="price">$25/{{ $t("pricing.period")}}</div>
              <div class="price action-price">$18/{{ $t("pricing.period")}}</div>
              <div class="price">$14/{{ $t("pricing.period")}}</div>
              <div class="price">$10/{{ $t("pricing.period")}}</div>
              <div class="price">$4.5/{{ $t("pricing.period")}}</div>
            </div>
          </div>
          <div class="string border">
            <div class="string-title">{{ $t("pricing.quarterly")}}</div>
            <div class="right" id="price2">
              <div class="price">$15/{{ $t("pricing.period")}}</div>
              <div class="price action-price">$13/{{ $t("pricing.period")}}</div>
              <div class="price">$10/{{ $t("pricing.period")}}</div>
              <div class="price">$7/{{ $t("pricing.period")}}</div>
              <div class="price">$3/{{ $t("pricing.period")}}</div>
            </div>
          </div>
          <div class="string border">
            <div class="string-title">{{ $t("pricing.yearly")}}</div>
            <div class="right" id="price3">
              <div class="price">$7/{{ $t("pricing.period")}}</div>
              <div class="price action-price">$6/{{ $t("pricing.period")}}</div>
              <div class="price">$4.5/{{ $t("pricing.period")}}</div>
              <div class="price">$3/{{ $t("pricing.period")}}</div>
              <div class="price">$1.5/{{ $t("pricing.period")}}</div>
            </div>
          </div>
        </div>
        <div class="description">
          {{ $t("pricing.description")}}
        </div>
      </div>
    </section>
    <section id="footer">
      <div class="bg"></div>
      <div class="dots"></div>
      <div class="circle"></div>

      <div class="content">
        <div class="logo-footer">
          <img src="/logo-white.svg" alt="">

        </div>

        <div class="blocks">
          <div class="left">
            <p>{{ $t("footer.text")}}

            </p>

            <div class="subscribe">
              <p>{{ $t("footer.sub")}}</p>
                <transition name="fade" appear>
                  <div  v-if="show" key="show">
                    <div class="subscribe-form" style="height: 70px;width: 400px">
                      <input id="useremail" type="email" :placeholder="$t('footer.placeholder')" required>
                      <input id="submit" type="submit" :value="$t('button.subscribe')" @click="subscribeSend()">
                    </div>
                  </div>

                  <div v-if="!show" key="notshow">
                    <div class="subscribe-form" style="height: 70px;width: 400px">
                      <span class="thx">
                        <span class="text">
                          Thanks to subscribe!
                        </span>
                      </span>
                    </div>
                  </div>
                </transition>


<!--                <p>{{ $t("footer.sub")}}</p>-->
<!--                <div class="subscribe-form">-->
<!--                  <input id="useremail" type="email" :placeholder="$t('footer.placeholder')" required>-->
<!--                  <input id="submit" type="submit" :value="$t('button.subscribe')">-->
<!--                </div>-->
            </div>

          </div>
          <div class="right">
            <div class="title">{{ $t("footer.social")}}</div>
            <div class="links">
              <a href="https://www.instagram.com/edcas.io/" class="link" target="_blank">Instagram</a>
              <a href="https://www.linkedin.com/company/education-universe-llc/" class="link"
                 target="_blank">Linkedin</a>
              <a href="https://vk.com/edcas_io" class="link" target="_blank">Vkontakte</a>
            </div>
          </div>
        </div>


        <div class="footer">
          <div class="copy">&copy; 2019 Education Universe LLC</div>
          <div class="email"><a href="mailto:contact@edcas.io" class="">contact@edcas.io</a></div>
          <div class="privacy"><a href="#" class="">Privacy policy</a></div>
        </div>

      </div>

    </section>
  </v-app>
</template>

<script>
	import axios from "axios"

	export default {
		name: 'App',
		data: () => ({
			slides: 4,
			active: 1,
			dialog: false,
			dialog2: false,
			formtop: {
				topname: '',
				topcompany: '',
				topposition: '',
				topemail: '',
			},
			formtop1: {
				topname1: '',
				topcompany1: '',
				topposition1: '',
				topemail1: '',
			},
      show: "hide"
		}),
		methods: {
			otherLocale() {
				let other = 'en';
				if (this.$i18n.locale === 'en') {
					other = 'ru'
				}

			},
			switchLocale(lang) {
				if (lang === 'ru') {
					this.$i18n.locale = 'ru'
				} else if (lang === 'en') {
					this.$i18n.locale = 'en'
				}
			},
			switchLocaleMenu(tag) {
				let blk = document.getElementById(tag),
						style = window.getComputedStyle(blk),
						top = style.getPropertyValue('display'),
						arrow = document.getElementById('arrow'),
						arrow2 = document.getElementById('arrow2');

				if (top == 'block') {
					blk.style.display = 'none'
					arrow.style.transform = "rotate(180deg)"
					arrow2.style.transform = "rotate(180deg)"
				} else {
					blk.style.display = 'block'
					arrow.style.transform = "rotate(0deg)"
					arrow2.style.transform = "rotate(0deg)"
				}
			},
			activationMenu() {
				let blk = document.getElementById("xs-menu"),
						style = window.getComputedStyle(blk),
						top = style.getPropertyValue('display');
				if (top == 'block') {
					blk.style.display = 'none'
				} else {
					blk.style.display = 'block'
				}
			},
			scrollMeTo(refName) {
				let blk = document.getElementById("xs-menu"),
						style = window.getComputedStyle(blk),
						top2 = style.getPropertyValue('display');
				if (top2 == 'block') {
					blk.style.display = 'none'
				}

				let element = this.$refs[refName];
				let top = element.offsetTop;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			},
			move(amount) {
				let newActive
				const newIndex = this.active + amount
				if (newIndex > this.slides) newActive = 1
				if (newIndex === 0) newActive = this.slides
				this.active = newActive || newIndex
			},
			changePrice(amount) {
				let price_btn = document.getElementById("price_btn"),
						one = document.getElementById("price1"),
						two = document.getElementById("price2"),
						three = document.getElementById("price3")

				let arr = price_btn.getElementsByClassName('table-btn')
				let i = 0;

				for (i = 0; i < arr.length; i++) {
					if (i === amount) {
						arr[amount].classList.add("action");
					} else {
						arr[i].classList.remove("action");
					}
				}
				for (i = 0; i < one.getElementsByClassName('price').length; i++) {
					if (i === amount) {
						one.getElementsByClassName('price')[amount].classList.add("action-price");
					} else {
						one.getElementsByClassName('price')[i].classList.remove("action-price");
					}
				}
				for (i = 0; i < two.getElementsByClassName('price').length; i++) {
					if (i === amount) {
						two.getElementsByClassName('price')[amount].classList.add("action-price");
					} else {
						two.getElementsByClassName('price')[i].classList.remove("action-price");
					}
				}
				for (i = 0; i < three.getElementsByClassName('price').length; i++) {
					if (i === amount) {
						three.getElementsByClassName('price')[amount].classList.add("action-price");
					} else {
						three.getElementsByClassName('price')[i].classList.remove("action-price");
					}
				}


			},
			partnersMove(amount) {
				let element = document.getElementById("partner_slider"),
						style = window.getComputedStyle(element),
						margin = style.getPropertyValue("margin-left");
				element.style.marginLeft = (parseInt(margin) + amount) + "px"
				console.log(margin)
			},
			mediaMove(amount) {
				let element = document.getElementById("media_slider"),
						style = window.getComputedStyle(element),
						margin = style.getPropertyValue("margin-left");
				element.style.marginLeft = (parseInt(margin) + amount) + "px"
				console.log(margin)
			},
			sendmailtop() {
				let validName = this.checkForm(this.formtop.topname, "text")
				let validCompany = this.checkForm(this.formtop.topcompany, "text")
				let validPosition = this.checkForm(this.formtop.topposition, "text")
				let validEmail = this.checkForm(this.formtop.topemail, "email")

				if (validName == false) {
					let element = document.getElementById("topname")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopname')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topname")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopname')
					span.style.display = "none"
				}

				if (validCompany == false) {
					let element = document.getElementById("topcompany")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopcompany')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topcompany")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopcompany')
					span.style.display = "none"
				}

				if (validPosition == false) {
					let element = document.getElementById("topposition")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopposition')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topposition")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopposition')
					span.style.display = "none"
				}

				if (validEmail == false) {
					let element = document.getElementById("topemail")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopemail')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topemail")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopemail')
					span.style.display = "none"
				}

				var data = new FormData();
				data.append("name", this.formtop.topname);
				data.append("company", this.formtop.topcompany);
				data.append("position", this.formtop.topposition);
				data.append("email", this.formtop.topemail);
				if (validName == true && validCompany == true && validPosition == true && validEmail == true) {
					axios.post('http://localhost:8081/sendRequest', data, {
						headers: {
							'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
						}
					})
							.then((response) => {
								console.log(response.status);
								if (response.status == 200) {
									let element = document.getElementById("topbutton")
									element.innerText = "Ваша заявка принята"

									this.dialog = false
								}
							})
							.catch((error) => {
								console.log(error);
							});
				}

			},
			sendmailtop1() {
				let validName = this.checkForm(this.formtop1.topname1, "text")
				let validCompany = this.checkForm(this.formtop1.topcompany1, "text")
				let validPosition = this.checkForm(this.formtop1.topposition1, "text")
				let validEmail = this.checkForm(this.formtop1.topemail1, "email")

				if (validName == false) {
					let element = document.getElementById("topname1")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopname1')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topname1")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopname1')
					span.style.display = "none"
				}

				if (validCompany == false) {
					let element = document.getElementById("topcompany1")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopcompany1')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topcompany1")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopcompany1')
					span.style.display = "none"
				}

				if (validPosition == false) {
					let element = document.getElementById("topposition1")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopposition1')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topposition1")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopposition1')
					span.style.display = "none"
				}

				if (validEmail == false) {
					let element = document.getElementById("topemail1")
					element.style.border = "1px solid red"
					let span = document.getElementById('validtopemail1')
					span.style.display = "block"
				} else {
					let element = document.getElementById("topemail1")
					element.style.border = "1px solid transparent"
					let span = document.getElementById('validtopemail1')
					span.style.display = "none"
				}

				var data = new FormData();
				data.append("name", this.formtop1.topname1);
				data.append("company", this.formtop1.topcompany1);
				data.append("position", this.formtop1.topposition1);
				data.append("email", this.formtop1.topemail1);
				if (validName == true && validCompany == true && validPosition == true && validEmail == true) {
					axios.post('http://localhost:8081/sendRequest', data, {
						headers: {
							'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
						}
					})
							.then((response) => {
								console.log(response.status);
								if (response.status == 200) {
									let element = document.getElementById("topbutton1")
									element.innerText = "Ваша заявка принята"

									this.dialog2 = false
								}
							})
							.catch((error) => {
								console.log(error);
							});
				}

			},
			checkForm(data, type) {
				if (type == "text") {
					console.log(data.length)
					return data.length >= 1 ? true : false
				}
				if (type == "email") {
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(data) == true ? true : false;
				}
			},
			subscribeSend() {


        this.show = !this.show
				setTimeout(() => this.show = !this.show, 4000);
			}
		}

	};
</script>

<style lang="scss">

  .fade-enter { opacity: 0 }
  .fade-enter-active { transition: opacity 3s ease }
  .fade-leave {opacity: 0}
  .fade-leave-active { transition: opacity 4s ease; }

  button:focus {
    outline: none !important;
  }

  .v-dialog.v-dialog--active {
    background: #FFFFFF;
    box-shadow: 0px 30px 70px rgba(0, 0, 0, 0.04);
    border-radius: 32px;
  }

  .modal-header {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      text-align: center !important;
      font-family: 'Montserrat', sans-serif !important;
      font-size: 30px !important;
      font-weight: bold !important;
    }
  }

  .input {
    margin-bottom: 24px;

    input {
      background: #F7F7FA;
      border-radius: 32px;
      height: 56px;
      padding-left: 20px;
      width: 360px;

      &:focus {
        outline: none !important;
      }
    }

  }

  .block-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-btn {
      background: #29C061;
      box-shadow: 0px 10px 20px rgba(41, 192, 97, 0.25);
      border-radius: 32px;
      width: 340px;
      height: 56px;
      text-align: center;
      padding: 17px 56px;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }

  .xs-modal-menu {
    display: flex;
    position: absolute;
    z-index: 1090;
    background-color: white;
    height: 100vh;
    width: 100%;
    top: 0;
  }

  .link-menu {
    display: flex;
    flex-wrap: wrap;
    margin: 25px 70px;

    .head-menu-item {
      width: 100%;
      font-family: 'Montserrat', sans-serif !important;
      font-size: 20px !important;
      font-weight: normal !important;
      cursor: pointer;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #EBFFFE;
  }

  ::-webkit-scrollbar-thumb {
    border-width: 1px 1px 1px 2px;
    border-color: #29C061;
    background-color: #29C061;
  }

  ::-webkit-scrollbar-thumb:hover {
    border-width: 1px 1px 1px 2px;
    border-color: #29C061;
    background-color: #29C061;
  }

  ::-webkit-scrollbar-track {
    border-width: 0;
  }

  ::-webkit-scrollbar-track:hover {
    border-left: solid 1px #EBFFFE;
    background-color: #EBFFFE;
  }

  .edcas {
    background-color: white !important;
  }

  @-webkit-keyframes bounceInDown {
    0%, 100%, 60%, 75%, 90% {
      -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0)
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0)
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0)
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0)
    }

    100% {
      -webkit-transform: none;
      transform: none
    }
  }

  @keyframes bounceInDown {
    0%, 100%, 60%, 75%, 90% {
      -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0)
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0)
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0)
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0)
    }

    100% {
      -webkit-transform: none;
      transform: none
    }
  }

  @media (max-width: 767px) {
    /* стили для xs-устройств */
    body {
      overflow-x: hidden
    }
    .v-dialog__content {
      height: 100vh !important;
      width: 415px !important;
    }
    .input input {
      background: #F7F7FA;
      border-radius: 32px;
      height: 56px;
      padding-left: 20px;
      width: 100%;
    }
    .block-btn .modal-btn {
      background: #29C061;
      -webkit-box-shadow: 0px 10px 20px rgba(41, 192, 97, 0.25);
      box-shadow: 0px 10px 20px rgba(41, 192, 97, 0.25);
      border-radius: 32px;
      width: 240px;
      height: 56px;
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 12px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    .request {
      background: #29C061;
      box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
      border-radius: 32px;
      margin-right: 15px;
      width: 130px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      font-weight: bold;
      color: white;
      padding: 5px 10px;
      cursor: pointer;

      &:hover, &:focus {
        outline: 0 !important;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 0;
      z-index: 1050;
      position: sticky;

      .logotype {
        margin-left: 20px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 25px;
        }
      }

      .head-menu {
        display: none;


        .head-menu-item {
          padding: 0 7px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;

          .lang {
            background: #FFFFFF;
            box-shadow: 0 20px 30px rgba(70, 43, 7, 0.07);
            border-radius: 12px;
            padding: 24px 40px;
            position: absolute;
            right: -10px;
            top: 25px;

            .item {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;

              &:hover {
                color: #29C061;
              }

              &:not(:first-child) {
                margin-top: 16px;
              }
            }

            .active {
              color: #29C061;
            }
          }
        }

        .dropdown {
          position: relative;

          img {
            padding: 0 5px;
          }
        }
      }

      .xs-menu {
        margin-right: 32px;
        cursor: pointer;
        display: flex;
      }

      .buttons {
        background: #29C061;
        box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
        border-radius: 32px;
        margin-right: 15px;
        margin-left: 15px;
        width: 170px;
        text-align: center;

        .request {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: bold;
          color: white;
          padding: 5px 10px;
          cursor: pointer;

          &:hover, &:focus {
            outline: 0 !important;
          }
        }

      }
    }
    .home {
      background: url(/el/sign-bg.svg) no-repeat right;
      height: 740px;
      position: absolute;
      right: 0;
      top: -70px;
      background-size: contain;
      width: 420px;
    }
    #promo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15% 20px 15%;
      z-index: 1040;

      .text {
        h1, h2, h4 {
          font-family: 'Montserrat', sans-serif;
          color: #1B1B1B;
        }

        h1 {
          font-size: 20px;
          font-weight: bold;
          line-height: 20px;
          margin-bottom: 16px;
        }

        h2 {
          font-size: 15px;
          font-weight: normal;
          margin-bottom: 32px;
          line-height: 20px;
        }

        h4 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .promo-list {
          padding-left: 15px !important;
          color: #29C061;
          margin-bottom: 32px;

          li {
            p {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: normal;
              color: #1B1B1B;
              line-height: 22px;
              margin-bottom: 0;
            }
          }
        }

        .social {
          display: flex;
          margin-top: 40px;

          .social-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            margin-right: 32px;

            img {
              width: 24px;
            }
          }
        }
      }

      .banner {
        z-index: 1000;
        display: none;
      }
    }
    #features {
      margin-bottom: 140px;
      position: relative;

      .content {
        margin: 70px 15% 45px 15%;
        display: flex;
        flex-wrap: wrap;
        z-index: 1050;
        position: relative;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;

          span {
            background-color: #DFF7FB;
          }
        }

        .blocks {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .block {
            width: 100%;
            padding: 0 0 0 0;
            margin-bottom: 20px;

            .title {
              font-family: "Montserrat", sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              color: #1B1B1B;
              margin: 10px 0 0px 0;
              min-height: 60px;
              line-height: 20px;
            }

            span {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 12px !important;
              color: #1B1B1B;
              line-height: 22px;
            }
          }
        }
      }

      &:after {
        transform: rotate(5deg) skew(5deg);
      }

      .bg {
        background-color: #F8FEFF;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: 0;
        left: 740px;
      }

      .oval-bg {
        background: url(/el/oval-bg-1.svg);
        position: absolute;
        z-index: 1045;
        top: 180px;
        left: 110px;
        width: 990px;
        height: 840px;
      }
    }
    #integration {
      margin-left: 15%;
      margin-top: 70px;
      position: relative;

      .bg {
        position: absolute;
        background: url("/el/bg-2.svg");
        width: 100%;
        height: 92%;
        z-index: 1040;
      }

      .bg:before {
        background-color: white;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 165px;
      }

      .content {
        z-index: 1050;
        position: relative;
        display: flex;
        flex-wrap: wrap;

        .title {
          margin-left: 10px;
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 20px !important;
          line-height: 20px;
          color: #1B1B1B;
          margin-top: 160px;
          margin-bottom: 50px;
          width: 100%;
        }

        .blocks {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin-left: 0;

          .block {
            background: #FFFFFF;
            box-shadow: 0px 20px 30px rgba(70, 43, 7, 0.03);
            margin-bottom: 40px;
            width: 100%;
            padding: 20px 20px;
            margin-right: 0;

            .title-i {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 24px !important;
              color: #1B1B1B;
              margin-bottom: 25px;
            }

            .logos {
              display: flex;
              justify-content: space-evenly;
              align-items: flex-end;

              img {
                width: 65px !important;
              }
            }
          }
        }

        .text {
          margin-left: 15px;
          font-family: "Montserrat", sans-serif !important;
          font-weight: bold;
          font-size: 12px !important;
          margin-right: 15px;

          a {
            color: #5E9FEC;
            text-decoration: none;
          }
        }
      }
    }
    #team {
      margin-top: 100px;
      margin-bottom: 140px;
      position: relative;

      .oval-bg {
        background: url("/el/bg-sign-team.svg") 0% 0% no-repeat;
        position: absolute;
        width: 100%;
        height: 570px;
        z-index: 1040;
        background-size: contain;
      }

      .content {
        display: flex;
        justify-content: space-evenly;
        z-index: 1050;
        position: relative;

        .avatars {
          width: 50%;
          position: relative;
          display: none;

          .pic1 {
            position: absolute;
            background: url("/content/team/team1.png");
            width: 150px;
            height: 150px;
            background-size: cover;
            border-radius: 50%;
            left: 350px;
            top: 30px;
          }

          .pic2 {
            position: absolute;
            background: url("/content/team/team2.png");
            width: 110px;
            height: 110px;
            background-size: cover;
            border-radius: 50%;
            left: 180px;
            top: 90px;
          }

          .pic3 {
            position: absolute;
            background: url("/content/team/team3.png");
            width: 130px;
            height: 130px;
            background-size: cover;
            border-radius: 50%;
            left: 360px;
            top: 350px;
          }

          .pic4 {
            position: absolute;
            background: url("/content/team/team4.png");
            width: 70px;
            height: 70px;
            background-size: cover;
            border-radius: 50%;
            left: 160px;
            bottom: 190px;
          }
        }

        .blocks {
          position: relative;
          width: 65%;


          .title {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 20px !important;
            color: #1B1B1B;
            margin-bottom: 30px;
            margin-top: 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .slide {
            .name {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 21px !important;
              color: #1B1B1B;
              margin-bottom: 12px;
            }

            .position {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 14px !important;
              color: #015565;
              margin-bottom: 32px;
            }

            .text {
              margin-bottom: 32px;

              p {
                font-family: "Montserrat", sans-serif !important;
              }
            }

            .links {
              a {
                margin-right: 32px;
              }
            }
          }
        }
      }
    }
    #partners {
      position: relative;
      margin-bottom: 100px;

      .bg {
        background-color: #FFF8F8;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(-3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 45px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 20px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }

            .slider-btn {
              padding: 5px;
            }
          }
        }

        .blocks {
          .slider {
            width: 10000px;
          }

          a {
            img {
              height: 200px;
            }
          }
        }
      }
    }
    #faq {
      margin-bottom: 0px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 0 145px 0;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-left: 15%;
        }

        .list {
          width: 100%;

          .theme--light.v-expansion-panels .v-expansion-panel {
            font-family: "Montserrat", sans-serif !important;
            font-weight: 500 !important;
            font-size: 15px !important;
            color: #1B1B1B;
            padding: 25px 5%;
            border-bottom: 2px solid #E4E4E4 !important;
          }

          .v-expansion-panel::before {
            box-shadow: none !important;
          }

          .v-expansion-panel-header {
            padding: 0;
            font-family: "Montserrat", sans-serif !important;
            font-weight: 500 !important;
            font-size: 15px !important;
            color: #1B1B1B !important;
          }

          .v-expansion-panel-content__wrap {
            padding: 0;
            font-size: 15px;
            line-height: 24px;
            font-weight: 400;
            color: white;
          }

          .v-expansion-panel--active {
            background-color: #1B1B1B;
            color: white !important;
            padding: 25px 5% !important;
          }

          .v-expansion-panel-header--active {
            color: white !important;
            padding: 0 !important;
          }

          .theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
            border-color: transparent;
          }

          .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
            font-size: 48px;
            color: #1B1B1B;
          }

          .v-expansion-panel--active > .v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon {
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            color: white;
            font-size: 48px;
          }

          .item {
            padding: 25px 0;
            border-bottom: 2px solid #E4E4E4;
            flex-wrap: wrap;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            .head {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .text {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: 500;
                font-size: 16px !important;
                color: #1B1B1B;
                padding: 15px 0;
              }
            }

            span {
              display: none;
              padding: 15px 0;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: 500;
              font-size: 18px !important;
            }
          }
        }
      }
    }
    #media {
      position: relative;

      .bg {
        background-color: #F9FBFC;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 90%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-4.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .decor {
        background: url(/el/decor-1.svg);
        width: 146px;
        height: 146px;
        position: absolute;
        z-index: 1060;
        left: 80px;
        bottom: 10px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .slider-btn {
              padding: 5px;
            }

            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }
          }
        }

        .blocks {
          .slider {
            display: flex;

            a {
              text-decoration: none;
              margin-right: 40px;

              .blk {
                width: 300px;
                min-height: 320px;
                height: 320px;
                background: #FFFFFF;
                box-shadow: 0px 20px 30px #F1F8FB;

                img {
                  height: 200px;
                  width: 100%;
                }

                p {
                  font-family: 'Montserrat', sans-serif !important;
                  font-weight: bold;
                  font-size: 15px !important;
                  line-height: 24px;
                  color: #1B1B1B;
                  padding: 24px;
                }
              }
            }
          }
        }
      }
    }
    #pricing {
      position: relative;
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 0 45px 0;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 60px;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-left: 15%;
        }

        .table {
          width: 100%;

          .string {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-bottom: 10px;

            .string-title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 12px !important;
              color: #1B1B1B;
              width: 30%;
            }

            .right {
              display: flex;
              width: 70%;
              justify-content: flex-end;

              .table-btn {
                background: #FFFFFF;
                -webkit-box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
                box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
                border-radius: 32px;
                width: 102px;
                padding: 10px;
                border: 2px solid transparent;
                margin-left: 0px;
                font-family: "Montserrat", sans-serif !important;
                font-weight: bold;
                font-size: 8px !important;
              }

              .action {
                border: 2px solid #29C061;
                color: #29C061;
              }

              .price {
                width: 144px;
                padding: 0px;
                margin-left: 0;
                text-align: center;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 7px !important;
              }

              .action-price {
                color: #29C061;
              }
            }

            .bold {
              font-weight: bold;
            }

          }

          .border {
            border-bottom: 1px dashed #D2F0EE;
            padding: 10px 0;
          }
        }

        .description {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: normal;
          font-size: 12px !important;
          color: #1B1B1B;
          margin-top: 32px;
        }
      }
    }
    #footer {
      background-color: #252A2F;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("/el/bg-5.svg");
        top: -80px;
        z-index: 1040;
      }

      .dots {
        position: absolute;
        width: 148px;
        height: 148px;
        background: url("/el/dots-1.svg");
        z-index: 1050;
        right: 410px;
        top: -125px;
      }

      .circle {
        position: absolute;
        width: 292px;
        height: 368px;
        background: url(/el/decor-2.svg);
        z-index: 1050;
        right: -30px;
        top: -303px;
      }

      .content {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: bold;
        font-size: 32px !important;
        z-index: 1060;
        color: white;
        margin: 90px 15% 0 15%;
        position: relative;

        .blocks {
          display: flex;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          flex-wrap: wrap;

          .left {
            padding-top: 40px;
            padding-right: 0;
            width: 100%;

            p {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 14px !important;
              line-height: 22px;
            }

            .subscribe {
              margin-top: 40px;

              p {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 16px !important;
              }

              .subscribe-form {
                margin-bottom: 30px;

                input[type="email"], input[type="submit"] {
                  border-radius: 45px;
                  padding-left: 15px;
                  padding-right: 15px;
                }

                input[type="email"] {
                  background-color: #FFF;
                  border: solid #1B162C;
                  color: #9DA5C1;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  padding-left: 20px;
                  height: 56px;
                  width: 250px;
                  font-size: 16px;
                  font-weight: 600;

                  &:focus, &:hover {
                    outline: none;
                  }
                }

                input[type="email"]::-webkit-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]:-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="submit"] {
                  color: white;
                  background-color: #29C061;
                  box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
                  border-radius: 32px;
                  font-size: 16px;
                  font-weight: normal;
                  padding: 5px 25px;
                  cursor: pointer;
                  width: 250px;

                  &:focus, &:hover {
                    outline: none;
                  }
                }
              }
            }
          }

          .right {
            width: 100%;

            .title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-align: left;
              margin-bottom: 20px;
            }

            .links {
              display: flex;
              flex-wrap: wrap;

              .link {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: normal;
                font-size: 16px !important;
                color: white;
                text-decoration: none;
                width: 100%;
                margin-bottom: 5px;

                &:hover {
                  text-decoration: none;
                }
              }
            }
          }
        }

        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          width: 100%;
          flex-wrap: wrap;

          .copy {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 14px !important;
            width: 100%;
          }

          .email {
            width: 100%;
            text-align: center;

            a {
              color: #86BDFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 14px !important;
              text-decoration: none;
            }
          }

          .privacy {
            width: 100%;
            text-align: center;

            a {
              color: #FFFFFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 14px !important;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    /* стили для sm-устройств */
    body {
      overflow-x: hidden
    }
    .request {
      background: #29C061;
      box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
      border-radius: 32px;
      margin-right: 32px;
      width: 170px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: bold;
      color: white;
      padding: 13px 23px;
      cursor: pointer;

      &:hover, &:focus {
        outline: 0 !important;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 0;
      z-index: 1050;
      position: sticky;

      .logotype {
        margin-left: 32px;
      }

      .head-menu {
        display: none;

        .head-menu-item {
          padding: 0 7px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;

          .lang {
            background: #FFFFFF;
            box-shadow: 0 20px 30px rgba(70, 43, 7, 0.07);
            border-radius: 12px;
            padding: 24px 40px;
            position: absolute;
            right: -10px;
            top: 25px;

            .item {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;

              &:hover {
                color: #29C061;
              }

              &:not(:first-child) {
                margin-top: 16px;
              }
            }

            .active {
              color: #29C061;
            }
          }
        }

        .dropdown {
          position: relative;

          img {
            padding: 0 5px;
          }
        }
      }

      .xs-menu {
        margin-right: 32px;
        cursor: pointer;
      }

      .buttons {
        background: #29C061;
        box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
        border-radius: 32px;
        margin-right: 32px;
        width: 170px;
        text-align: center;

        .request {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: bold;
          color: white;
          padding: 13px 23px;
          cursor: pointer;

          &:hover, &:focus {
            outline: 0 !important;
          }
        }

      }
    }
    .home {
      background: url(/el/sign-bg.svg) no-repeat right;
      height: 740px;
      position: absolute;
      right: 0;
      top: -70px;
      background-size: contain;
      width: 420px;
    }
    #promo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15% 145px 15%;
      z-index: 1040;

      .text {
        h1, h2, h4 {
          font-family: 'Montserrat', sans-serif;
          color: #1B1B1B;
        }

        h1 {
          font-size: 25px;
          font-weight: bold;
          line-height: 30px;
          margin-bottom: 16px;
        }

        h2 {
          font-size: 21px;
          font-weight: normal;
          margin-bottom: 32px;
          line-height: 20px;
        }

        h4 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .promo-list {
          padding-left: 15px !important;
          color: #29C061;
          margin-bottom: 32px;

          li {
            p {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: normal;
              color: #1B1B1B;
              line-height: 22px;
              margin-bottom: 0;
            }
          }
        }

        .social {
          display: flex;
          margin-top: 40px;

          .social-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            margin-right: 32px;

            img {
              width: 24px;
            }
          }
        }
      }

      .banner {
        z-index: 1000;
        display: none;
      }
    }
    #features {
      margin-bottom: 140px;
      position: relative;

      .content {
        margin: 160px 15% 45px 15%;
        display: flex;
        flex-wrap: wrap;
        z-index: 1050;
        position: relative;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;

          span {
            background-color: #DFF7FB;
          }
        }

        .blocks {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .block {
            width: 50%;
            padding: 0 90px 0 0;
            margin-bottom: 60px;

            .title {
              font-family: "Montserrat", sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              color: #1B1B1B;
              margin: 10px 0 0px 0;
              min-height: 60px;
              line-height: 20px;
            }

            span {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 12px !important;
              color: #1B1B1B;
              line-height: 22px;
            }
          }
        }
      }

      &:after {
        transform: rotate(5deg) skew(5deg);
      }

      .bg {
        background-color: #F8FEFF;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: 0;
        left: 740px;
      }

      .oval-bg {
        background: url(/el/oval-bg-1.svg);
        position: absolute;
        z-index: 1045;
        top: 180px;
        left: 110px;
        width: 990px;
        height: 840px;
      }
    }
    #integration {
      margin-left: 15%;
      margin-top: 70px;
      position: relative;

      .bg {
        position: absolute;
        background: url("/el/bg-2.svg");
        width: 100%;
        height: 92%;
        z-index: 1040;
      }

      .bg:before {
        background-color: white;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 165px;
      }

      .content {
        z-index: 1050;
        position: relative;
        display: flex;
        flex-wrap: wrap;

        .title {
          margin-left: 90px;
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 160px;
          margin-bottom: 50px;
          width: 100%;
        }

        .blocks {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin-left: 90px;

          .block {
            background: #FFFFFF;
            box-shadow: 0px 20px 30px rgba(70, 43, 7, 0.03);
            margin-bottom: 40px;
            width: 40%;
            padding: 40px 40px;
            margin-right: 40px;

            .title-i {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 24px !important;
              color: #1B1B1B;
              margin-bottom: 25px;
            }

            .logos {
              display: flex;
              justify-content: space-evenly;
              align-items: flex-end;

              img {
                width: 130px;
              }
            }
          }
        }

        .text {
          margin-left: 110px;
          font-family: "Montserrat", sans-serif !important;
          font-weight: bold;
          font-size: 12px !important;
          margin-right: 70px;

          a {
            color: #5E9FEC;
            text-decoration: none;
          }
        }
      }
    }
    #team {
      margin-top: 100px;
      margin-bottom: 140px;
      position: relative;

      .oval-bg {
        background: url("/el/bg-sign-team.svg") 0% 0% no-repeat;
        position: absolute;
        width: 100%;
        height: 570px;
        z-index: 1040;
        background-size: contain;
      }

      .content {
        display: flex;
        justify-content: space-evenly;
        z-index: 1050;
        position: relative;

        .avatars {
          width: 50%;
          position: relative;
          display: none;

          .pic1 {
            position: absolute;
            background: url("/content/team/team1.png");
            width: 150px;
            height: 150px;
            background-size: cover;
            border-radius: 50%;
            left: 350px;
            top: 30px;
          }

          .pic2 {
            position: absolute;
            background: url("/content/team/team2.png");
            width: 110px;
            height: 110px;
            background-size: cover;
            border-radius: 50%;
            left: 180px;
            top: 90px;
          }

          .pic3 {
            position: absolute;
            background: url("/content/team/team3.png");
            width: 130px;
            height: 130px;
            background-size: cover;
            border-radius: 50%;
            left: 360px;
            top: 350px;
          }

          .pic4 {
            position: absolute;
            background: url("/content/team/team4.png");
            width: 70px;
            height: 70px;
            background-size: cover;
            border-radius: 50%;
            left: 160px;
            bottom: 190px;
          }
        }

        .blocks {
          position: relative;
          width: 65%;


          .title {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 32px !important;
            color: #1B1B1B;
            margin-bottom: 30px;
            margin-top: 80px;
          }

          .slide {
            .name {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 21px !important;
              color: #1B1B1B;
              margin-bottom: 12px;
            }

            .position {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 14px !important;
              color: #015565;
              margin-bottom: 32px;
            }

            .text {
              margin-bottom: 32px;

              p {
                font-family: "Montserrat", sans-serif !important;
              }
            }

            .links {
              a {
                margin-right: 32px;
              }
            }
          }
        }
      }
    }
    #partners {
      position: relative;
      margin-bottom: 100px;

      .bg {
        background-color: #FFF8F8;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(-3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 45px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }

            .slider-btn {
              padding: 5px;
            }
          }
        }

        .blocks {
          .slider {
            width: 10000px;
          }

          a {
            img {
              height: 200px;
            }
          }
        }
      }
    }
    #faq {
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .list {
          width: 100%;

          .item {
            padding: 25px 0;
            border-bottom: 2px solid #E4E4E4;
            flex-wrap: wrap;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            .head {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .text {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: 500;
                font-size: 16px !important;
                color: #1B1B1B;
                padding: 15px 0;
              }
            }

            span {
              display: none;
              padding: 15px 0;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: 500;
              font-size: 18px !important;
            }
          }
        }
      }
    }
    #media {
      position: relative;

      .bg {
        background-color: #F9FBFC;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 90%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-4.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .decor {
        background: url(/el/decor-1.svg);
        width: 146px;
        height: 146px;
        position: absolute;
        z-index: 1060;
        left: 80px;
        bottom: 10px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .slider-btn {
              padding: 5px;
            }

            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }
          }
        }

        .blocks {
          .slider {
            display: flex;

            a {
              text-decoration: none;
              margin-right: 40px;

              .blk {
                width: 300px;
                min-height: 320px;
                height: 320px;
                background: #FFFFFF;
                box-shadow: 0px 20px 30px #F1F8FB;

                img {
                  height: 200px;
                  width: 100%;
                }

                p {
                  font-family: 'Montserrat', sans-serif !important;
                  font-weight: bold;
                  font-size: 15px !important;
                  line-height: 24px;
                  color: #1B1B1B;
                  padding: 24px;
                }
              }
            }
          }
        }
      }
    }
    #pricing {
      position: relative;
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 120px;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .table {
          width: 100%;

          .string {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-bottom: 10px;

            .string-title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 12px !important;
              color: #1B1B1B;
              width: 30%;
            }

            .right {
              display: flex;
              width: 70%;
              justify-content: flex-end;

              .table-btn {
                background: #FFFFFF;
                box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
                border-radius: 32px;
                width: 144px;
                padding: 10px;
                border: 2px solid transparent;
                margin-left: 20px;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 13px !important;
              }

              .action {
                border: 2px solid #29C061;
                color: #29C061;
              }

              .price {
                width: 144px;
                padding: 10px;
                margin-left: 0;
                text-align: center;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 9px !important;
              }

              .action-price {
                color: #29C061;
              }
            }

            .bold {
              font-weight: bold;
            }

          }

          .border {
            border-bottom: 1px dashed #D2F0EE;
            padding: 10px 0;
          }
        }

        .description {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: normal;
          font-size: 12px !important;
          color: #1B1B1B;
          margin-top: 32px;
        }
      }
    }
    #footer {
      background-color: #252A2F;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("/el/bg-5.svg");
        top: -80px;
        z-index: 1040;
      }

      .dots {
        position: absolute;
        width: 148px;
        height: 148px;
        background: url("/el/dots-1.svg");
        z-index: 1050;
        right: 410px;
        top: -125px;
      }

      .circle {
        position: absolute;
        width: 292px;
        height: 368px;
        background: url(/el/decor-2.svg);
        z-index: 1050;
        right: -30px;
        top: -303px;
      }

      .content {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: bold;
        font-size: 32px !important;
        z-index: 1060;
        color: white;
        margin: 90px 15% 0 15%;
        position: relative;

        .blocks {
          display: flex;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);

          .left {
            padding-top: 40px;
            padding-right: 140px;
            width: 75%;

            p {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 14px !important;
              line-height: 22px;
            }

            .subscribe {
              margin-top: 40px;

              p {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 16px !important;
              }

              .subscribe-form {
                margin-bottom: 160px;

                input[type="email"], input[type="submit"] {
                  border-radius: 45px;
                  padding-left: 15px;
                  padding-right: 15px;
                }

                input[type="email"] {
                  background-color: #FFF;
                  border: solid #1B162C;
                  color: #9DA5C1;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  padding-left: 20px;
                  height: 56px;
                  width: 390px;
                  font-size: 16px;
                  font-weight: 600;

                  &:focus, &:hover {
                    outline: none;
                  }
                }

                input[type="email"]::-webkit-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]:-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="submit"] {
                  color: white;
                  background-color: #29C061;
                  box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
                  border-radius: 32px;
                  font-size: 16px;
                  font-weight: normal;
                  padding: 5px 25px;
                  cursor: pointer;
                  width: 390px;

                  &:focus, &:hover {
                    outline: none;
                  }
                }
              }
            }
          }

          .right {
            width: 25%;

            .title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-align: right;
              margin-bottom: 48px;
            }

            .links {
              display: flex;
              flex-wrap: wrap;

              .link {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: normal;
                font-size: 16px !important;
                color: white;
                text-decoration: none;
                width: 100%;
                text-align: end;
                margin-bottom: 40px;

                &:hover {
                  text-decoration: none;
                }
              }
            }
          }
        }

        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          width: 100%;
          flex-wrap: wrap;

          .copy {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 16px !important;
            width: 100%;
          }

          .email {
            width: 50%;

            a {
              color: #86BDFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-decoration: none;
            }
          }

          .privacy {
            width: 50%;
            text-align: right;

            a {
              color: #FFFFFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 16px !important;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media (min-width: 991px) and (max-width: 1199px) {
    /* стили для md-устройств */
    .request {
      background: #29C061;
      box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
      border-radius: 32px;
      margin-right: 32px;
      width: 170px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: bold;
      color: white;
      padding: 13px 23px;
      cursor: pointer;

      &:hover, &:focus {
        outline: 0 !important;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 0;
      z-index: 1050;
      position: sticky;

      .logotype {
        margin-left: 32px;
      }

      .xs-menu {
        display: none;
      }

      .head-menu {
        display: flex;

        .head-menu-item {
          padding: 0 7px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;

          .lang {
            background: #FFFFFF;
            box-shadow: 0 20px 30px rgba(70, 43, 7, 0.07);
            border-radius: 12px;
            padding: 24px 40px;
            position: absolute;
            right: -10px;
            top: 25px;

            .item {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;

              &:hover {
                color: #29C061;
              }

              &:not(:first-child) {
                margin-top: 16px;
              }
            }

            .active {
              color: #29C061;
            }
          }
        }

        .dropdown {
          position: relative;

          img {
            padding: 0 5px;
          }
        }
      }

      .buttons {
        background: #29C061;
        box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
        border-radius: 32px;
        margin-right: 32px;
        width: 170px;
        text-align: center;

        .request {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: bold;
          color: white;
          padding: 13px 23px;
          cursor: pointer;

          &:hover, &:focus {
            outline: 0 !important;
          }
        }

      }
    }
    .home {
      background: url(/el/sign-bg.svg) no-repeat right;
      height: 740px;
      position: absolute;
      right: 0;
      top: -70px;
      background-size: contain;
      width: 420px;
    }
    #promo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15% 145px 15%;
      z-index: 1040;

      .text {
        h1, h2, h4 {
          font-family: 'Montserrat', sans-serif;
          color: #1B1B1B;
        }

        h1 {
          font-size: 25px;
          font-weight: bold;
          line-height: 30px;
          margin-bottom: 16px;
        }

        h2 {
          font-size: 21px;
          font-weight: normal;
          margin-bottom: 32px;
          line-height: 20px;
        }

        h4 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .promo-list {
          padding-left: 15px !important;
          color: #29C061;
          margin-bottom: 32px;

          li {
            p {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: normal;
              color: #1B1B1B;
              line-height: 22px;
              margin-bottom: 0;
            }
          }
        }

        .social {
          display: flex;
          margin-top: 40px;

          .social-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            margin-right: 32px;

            img {
              width: 24px;
            }
          }
        }
      }

      .banner {
        z-index: 1000;
      }
    }
    #features {
      margin-bottom: 140px;
      position: relative;

      .content {
        margin: 160px 15% 45px 15%;
        display: flex;
        flex-wrap: wrap;
        z-index: 1050;
        position: relative;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;

          span {
            background-color: #DFF7FB;
          }
        }

        .blocks {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .block {
            width: 33.3333333%;
            padding: 0 90px 0 0;
            margin-bottom: 60px;

            .title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 13px !important;
              color: #1B1B1B;
              margin: 24px 0 16px 0;
              min-height: 60px;
              line-height: 20px;
            }

            span {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 12px !important;
              color: #1B1B1B;
              line-height: 22px;
            }
          }
        }
      }

      &:after {
        transform: rotate(5deg) skew(5deg);
      }

      .bg {
        background-color: #F8FEFF;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: 0;
        left: 740px;
      }

      .oval-bg {
        background: url(/el/oval-bg-1.svg);
        position: absolute;
        z-index: 1045;
        top: 180px;
        left: 110px;
        width: 990px;
        height: 840px;
      }
    }
    #integration {
      margin-left: 15%;
      margin-top: 70px;
      position: relative;

      .bg {
        position: absolute;
        background: url("/el/bg-2.svg");
        width: 100%;
        height: 92%;
        z-index: 1040;
      }

      .bg:before {
        background-color: white;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 165px;
      }

      .content {
        z-index: 1050;
        position: relative;
        display: flex;
        flex-wrap: wrap;

        .title {
          margin-left: 90px;
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 160px;
          margin-bottom: 50px;
          width: 100%;
        }

        .blocks {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin-left: 90px;

          .block {
            background: #FFFFFF;
            box-shadow: 0px 20px 30px rgba(70, 43, 7, 0.03);
            margin-bottom: 40px;
            width: 40%;
            padding: 40px 40px;
            margin-right: 40px;

            .title-i {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 24px !important;
              color: #1B1B1B;
              margin-bottom: 25px;
            }

            .logos {
              display: flex;
              justify-content: space-evenly;
              align-items: flex-end;

              img {
                width: 130px;
              }
            }
          }
        }

        .text {
          margin-left: 90px;
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 12px !important;

          a {
            color: #5E9FEC;
            text-decoration: none;
          }
        }
      }
    }
    #team {
      margin-top: 100px;
      margin-bottom: 140px;
      position: relative;

      .oval-bg {
        background: url("/el/bg-sign-team.svg") 0% 0% no-repeat;
        position: absolute;
        width: 100%;
        height: 570px;
        z-index: 1040;
        background-size: contain;
      }

      .content {
        display: flex;
        justify-content: space-evenly;
        z-index: 1050;
        position: relative;

        .avatars {
          width: 50%;
          position: relative;

          .pic1 {
            position: absolute;
            background: url("/content/team/team1.png");
            width: 150px;
            height: 150px;
            background-size: cover;
            border-radius: 50%;
            left: 350px;
            top: 30px;
          }

          .pic2 {
            position: absolute;
            background: url("/content/team/team2.png");
            width: 110px;
            height: 110px;
            background-size: cover;
            border-radius: 50%;
            left: 180px;
            top: 90px;
          }

          .pic3 {
            position: absolute;
            background: url("/content/team/team3.png");
            width: 130px;
            height: 130px;
            background-size: cover;
            border-radius: 50%;
            left: 360px;
            top: 350px;
          }

          .pic4 {
            position: absolute;
            background: url("/content/team/team4.png");
            width: 70px;
            height: 70px;
            background-size: cover;
            border-radius: 50%;
            left: 160px;
            bottom: 190px;
          }
        }

        .blocks {
          position: relative;
          width: 35%;
          margin-right: 5%;

          .title {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 32px !important;
            color: #1B1B1B;
            margin-bottom: 80px;
            margin-top: 80px;
          }

          .slide {
            .name {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 21px !important;
              color: #1B1B1B;
              margin-bottom: 12px;
            }

            .position {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 14px !important;
              color: #015565;
              margin-bottom: 32px;
            }

            .text {
              margin-bottom: 32px;

              p {
                font-family: "Montserrat", sans-serif !important;
              }
            }

            .links {
              a {
                margin-right: 32px;
              }
            }
          }
        }
      }
    }
    #partners {
      position: relative;
      margin-bottom: 100px;

      .bg {
        background-color: #FFF8F8;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(-3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 45px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }

            .slider-btn {
              padding: 5px;
              display: none;
            }
          }
        }

        .blocks {
          .slider {
            width: 10000px;
          }

          a {
            img {
              height: 200px;
            }
          }
        }
      }
    }
    #faq {
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .list {
          width: 100%;

          .item {
            padding: 25px 0;
            border-bottom: 2px solid #E4E4E4;
            flex-wrap: wrap;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            .head {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .text {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: 500;
                font-size: 16px !important;
                color: #1B1B1B;
                padding: 15px 0;
              }
            }

            .collapse-title {
              display: block;
              margin: 0 0 10px 0;
              padding: 10px 15px;

              background-color: #34495e;
              color: #fff;

              font-size: 18px;
              font-weight: bold;
              text-decoration: none;
              transition: all .3s ease-in-out;

              z-index: 9999;
            }

            .collapse-title:hover,
            .collapse-title:focus {
              background-color: #2c3e50;
              outline: none;
            }

            .collapse {
              max-height: 0;
              width: calc(100% - 20px);
              margin: 10px auto;
              transform: scaleY(0);
              transform-origin: top;
              opacity: 0;
              text-align: justify;
            }

            .collapse:target {
              max-height: inherit;
              transform: scaleY(1);
              transition: all .3s ease-in-out;
              opacity: 1;
            }

            span {
              display: none;
              padding: 15px 0;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: 500;
              font-size: 18px !important;
              max-height: 0;
              width: calc(100% - 20px);
              margin: 10px auto;
              transform: scaleY(0);
              transform-origin: top;
              opacity: 0;
              text-align: justify;
            }

            span:target {
              max-height: inherit;
              transform: scaleY(1);
              transition: all .3s ease-in-out;
              opacity: 1;
            }
          }

        }
      }
    }
    #media {
      position: relative;

      .bg {
        background-color: #F9FBFC;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 90%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-4.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .decor {
        background: url(/el/decor-1.svg);
        width: 146px;
        height: 146px;
        position: absolute;
        z-index: 1060;
        left: 80px;
        bottom: 10px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .slider-btn {
              padding: 5px;
              display: none;
            }

            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }
          }
        }

        .blocks {
          .slider {
            display: flex;

            a {
              text-decoration: none;
              margin-right: 40px;

              .blk {
                width: 300px;
                min-height: 320px;
                height: 320px;
                background: #FFFFFF;
                box-shadow: 0px 20px 30px #F1F8FB;

                img {
                  height: 200px;
                  width: 100%;
                }

                p {
                  font-family: 'Montserrat', sans-serif !important;
                  font-weight: bold;
                  font-size: 15px !important;
                  line-height: 24px;
                  color: #1B1B1B;
                  padding: 24px;
                }
              }
            }
          }
        }
      }
    }
    #pricing {
      position: relative;
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 120px;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .table {
          width: 100%;

          .string {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-bottom: 10px;

            .string-title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 16px !important;
              color: #1B1B1B;
              width: 30%;
            }

            .right {
              display: flex;
              width: 70%;
              justify-content: flex-end;

              .table-btn {
                background: #FFFFFF;
                box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
                border-radius: 32px;
                width: 144px;
                padding: 10px;
                border: 2px solid transparent;
                margin-left: 20px;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 20px !important;
              }

              .action {
                border: 2px solid #29C061;
                color: #29C061;
              }

              .price {
                width: 144px;
                padding: 10px;
                margin-left: 20px;
                text-align: center;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 11px !important;
              }

              .action-price {
                color: #29C061;
              }
            }

            .bold {
              font-weight: bold;
            }

          }

          .border {
            border-bottom: 1px dashed #D2F0EE;
            padding: 10px 0;
          }
        }

        .description {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: normal;
          font-size: 12px !important;
          color: #1B1B1B;
          margin-top: 32px;
        }
      }
    }
    #footer {
      background-color: #252A2F;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("/el/bg-5.svg");
        top: -80px;
        z-index: 1040;
      }

      .dots {
        position: absolute;
        width: 148px;
        height: 148px;
        background: url("/el/dots-1.svg");
        z-index: 1050;
        right: 410px;
        top: -125px;
      }

      .circle {
        position: absolute;
        width: 292px;
        height: 368px;
        background: url(/el/decor-2.svg);
        z-index: 1050;
        right: -30px;
        top: -303px;
      }

      .content {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: bold;
        font-size: 32px !important;
        z-index: 1060;
        color: white;
        margin: 90px 15% 0 15%;
        position: relative;

        .blocks {
          display: flex;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);

          .left {
            padding-top: 40px;
            padding-right: 140px;
            width: 85%;

            p {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 14px !important;
              line-height: 22px;
            }

            .subscribe {
              margin-top: 40px;

              p {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 16px !important;
              }

              .subscribe-form {
                margin-bottom: 160px;

                input[type="email"], input[type="submit"] {
                  border-radius: 45px;
                  padding-left: 15px;
                  padding-right: 15px;
                }

                input[type="email"] {
                  background-color: #FFF;
                  border: solid #1B162C;
                  color: #9DA5C1;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  padding-left: 20px;
                  height: 56px;
                  width: 390px;
                  font-size: 16px;
                  font-weight: 600;

                  &:focus, &:hover {
                    outline: none;
                  }
                }

                input[type="email"]::-webkit-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]:-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="submit"] {
                  color: white;
                  margin-left: -158px;
                  background-color: #29C061;
                  box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
                  border-radius: 32px;
                  font-size: 16px;
                  font-weight: normal;
                  padding: 5px 25px;
                  cursor: pointer;

                  &:focus, &:hover {
                    outline: none;
                  }
                }
              }
            }
          }

          .right {
            width: 15%;

            .title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-align: right;
              margin-bottom: 48px;
            }

            .links {
              display: flex;
              flex-wrap: wrap;

              .link {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: normal;
                font-size: 16px !important;
                color: white;
                text-decoration: none;
                width: 100%;
                text-align: end;
                margin-bottom: 40px;

                &:hover {
                  text-decoration: none;
                }
              }
            }
          }
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;

          .copy {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 16px !important;
          }

          .email {
            a {
              color: #86BDFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-decoration: none;
            }
          }

          .privacy {
            a {
              color: #FFFFFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 16px !important;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    /* стили для lg-устройств */
    .request {
      background: #29C061;
      box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
      border-radius: 32px;
      margin-right: 32px;
      width: 170px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: bold;
      color: white;
      padding: 13px 23px;
      cursor: pointer;

      &:hover, &:focus {
        outline: 0 !important;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 0;
      z-index: 1050;
      position: sticky;

      .logotype {
        margin-left: 32px;
      }

      .xs-menu {
        display: none;
      }

      .head-menu {
        display: flex;

        .head-menu-item {
          padding: 0 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;

          .lang {
            background: #FFFFFF;
            box-shadow: 0 20px 30px rgba(70, 43, 7, 0.07);
            border-radius: 12px;
            padding: 24px 40px;
            position: absolute;
            right: -10px;
            top: 25px;

            .item {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;

              &:hover {
                color: #29C061;
              }

              &:not(:first-child) {
                margin-top: 16px;
              }
            }

            .active {
              color: #29C061;
            }
          }
        }

        .dropdown {
          position: relative;

          img {
            padding: 0 5px;
          }
        }
      }

      .buttons {
        background: #29C061;
        box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
        border-radius: 32px;
        margin-right: 32px;
        width: 170px;
        text-align: center;

        .request {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: bold;
          color: white;
          padding: 13px 23px;
          cursor: pointer;

          &:hover, &:focus {
            outline: 0 !important;
          }
        }

      }
    }
    .home {
      background: url(/el/sign-bg.svg) no-repeat right;
      height: 740px;
      position: absolute;
      right: 0;
      top: -70px;
      background-size: contain;
      width: 420px;
    }
    #promo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15% 145px 15%;
      z-index: 1040;

      .text {
        h1, h2, h4 {
          font-family: 'Montserrat', sans-serif;
          color: #1B1B1B;
        }

        h1 {
          font-size: 35px;
          font-weight: bold;
          line-height: 42px;
          margin-bottom: 16px;
        }

        h2 {
          font-size: 21px;
          font-weight: normal;
          margin-bottom: 32px;
        }

        h4 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .promo-list {
          padding-left: 15px !important;
          color: #29C061;
          margin-bottom: 32px;

          li {
            p {
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              font-weight: normal;
              color: #1B1B1B;
              line-height: 22px;
              margin-bottom: 0;
            }
          }
        }

        .social {
          display: flex;
          margin-top: 40px;

          .social-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            margin-right: 32px;

            img {
              width: 24px;
            }
          }
        }
      }

      .banner {
        z-index: 1000;
      }
    }
    #features {
      margin-bottom: 140px;
      position: relative;

      .content {
        margin: 160px 15% 45px 15%;
        display: flex;
        flex-wrap: wrap;
        z-index: 1050;
        position: relative;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;

          span {
            background-color: #DFF7FB;
          }
        }

        .blocks {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .block {
            width: 33.3333333%;
            padding: 0 90px 0 0;
            margin-bottom: 60px;

            .title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 18px !important;
              color: #1B1B1B;
              margin: 24px 0 16px 0;
            }

            span {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 16px !important;
              color: #1B1B1B;
              line-height: 22px;
            }
          }
        }
      }

      &:after {
        transform: rotate(5deg) skew(5deg);
      }

      .bg {
        background-color: #F8FEFF;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: 0;
        left: 740px;
      }

      .oval-bg {
        background: url(/el/oval-bg-1.svg);
        position: absolute;
        z-index: 1045;
        top: 180px;
        left: 110px;
        width: 990px;
        height: 840px;
      }
    }
    #integration {
      margin-left: 15%;
      margin-top: 70px;
      position: relative;

      .bg {
        position: absolute;
        background: url("/el/bg-2.svg");
        width: 100%;
        height: 92%;
        z-index: 1040;
      }

      .bg:before {
        background-color: white;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -120px;
        right: 505px;
      }

      .content {
        z-index: 1050;
        position: relative;
        display: flex;
        flex-wrap: wrap;

        .title {
          margin-left: 90px;
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 160px;
          margin-bottom: 50px;
          width: 100%;
        }

        .blocks {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin-left: 90px;

          .block {
            background: #FFFFFF;
            box-shadow: 0px 20px 30px rgba(70, 43, 7, 0.03);
            margin-bottom: 40px;
            width: 40%;
            padding: 40px 40px;
            margin-right: 40px;

            .title-i {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 24px !important;
              color: #1B1B1B;
              margin-bottom: 25px;
            }

            .logos {
              display: flex;
              justify-content: space-evenly;
              align-items: flex-end;

              img {
                width: 130px;
              }
            }
          }
        }

        .text {
          margin-left: 140px;
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 18px !important;

          a {
            color: #5E9FEC;
            text-decoration: none;
          }
        }
      }
    }
    #team {
      margin-top: 100px;
      margin-bottom: 140px;
      position: relative;
      height: 610px;

      .oval-bg {
        background: url("/el/bg-sign-team.svg") 0% 0% no-repeat;
        position: absolute;
        width: 100%;
        height: 570px;
        z-index: 1040;
        background-size: contain;
      }

      .content {
        display: flex;
        justify-content: space-evenly;
        z-index: 1050;
        position: relative;

        .avatars {
          width: 50%;
          position: relative;

          .pic1 {
            position: absolute;
            background: url("/content/team/team1.png");
            width: 150px;
            height: 150px;
            background-size: cover;
            border-radius: 50%;
            left: 380px;
            top: 30px;
          }

          .pic2 {
            position: absolute;
            background: url("/content/team/team2.png");
            width: 110px;
            height: 110px;
            background-size: cover;
            border-radius: 50%;
            left: 180px;
            top: 90px;
          }

          .pic3 {
            position: absolute;
            background: url("/content/team/team3.png");
            width: 130px;
            height: 130px;
            background-size: cover;
            border-radius: 50%;
            left: 410px;
            top: 350px;
          }

          .pic4 {
            position: absolute;
            background: url("/content/team/team4.png");
            width: 70px;
            height: 70px;
            background-size: cover;
            border-radius: 50%;
            left: 250px;
            bottom: 110px;
          }
        }

        .blocks {
          position: relative;
          width: 50%;
          margin-right: 15%;

          .title {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 32px !important;
            color: #1B1B1B;
            margin-bottom: 80px;
            margin-top: 80px;
            display: flex;
            justify-content: space-between;

            div {
              .slider-btn {
                padding: 5px;
                cursor: pointer;
              }

              .action {
                background: url(/icon/slider-oval.svg) 0 0 no-repeat;
                background-size: contain;
              }
            }
          }

          .slide {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 310px;

            .animated {
              transition: top 600ms ease-out 400ms;
              //transition: all 400ms;
              position: absolute;
              transform: translate(-50%, -50%);
              width: 675px;
            }

            .slide-in {
              opacity: 0;
              transform: translate(-40%, -50%);
            }

            .slide-in-active {
              transition-delay: 150ms;
            }

            .slide-out {
              opacity: 1;
            }

            .slide-out-active {
              opacity: 0;
              transform: translate(-60%, -50%);
            }

            .name {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 21px !important;
              color: #1B1B1B;
              margin-bottom: 12px;
            }

            .position {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 14px !important;
              color: #015565;
              margin-bottom: 32px;
            }

            .text {
              margin-bottom: 32px;

              p {
                font-family: "Montserrat", sans-serif !important;
                min-height: 150px;
              }
            }

            .links {
              a {
                margin-right: 32px;
              }
            }
          }
        }
      }
    }
    #partners {
      position: relative;
      margin-bottom: 100px;

      .bg {
        background-color: #FFF8F8;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 100%;
        transform: rotate(-3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-1.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 45px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }

            .slider-btn {
              padding: 5px;
              display: none;
            }
          }
        }

        .blocks {
          .slider {
            width: 10000px;
          }

          a {
            img {
              height: 200px;
            }
          }
        }
      }
    }
    #faq {
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 10% 145px 10%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin: 120px 5% 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .list {
          width: 100%;

          .item {
            padding: 25px 0;
            border-bottom: 2px solid #E4E4E4;
            flex-wrap: wrap;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            .head {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .text {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: 500;
                font-size: 21px !important;
                color: #1B1B1B;
                padding: 15px 0;
              }
            }

            span {
              display: none;
              padding: 15px 0;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: 500;
              font-size: 18px !important;
            }
          }

          .theme--light.v-expansion-panels .v-expansion-panel {
            font-family: "Montserrat", sans-serif !important;
            font-weight: 500 !important;
            font-size: 21px !important;
            color: #1B1B1B;
            padding: 25px 5%;
            border-bottom: 2px solid #E4E4E4 !important;
          }

          .v-expansion-panel::before {
            box-shadow: none !important;
          }

          .v-expansion-panel-header {
            padding: 0;
            font-family: "Montserrat", sans-serif !important;
            font-weight: 500 !important;
            font-size: 21px !important;
            color: #1B1B1B !important;
          }

          .v-expansion-panel-content__wrap {
            padding: 0;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: white;
          }

          .v-expansion-panel--active {
            background-color: #1B1B1B;
            color: white !important;
            padding: 25px 5% !important;
          }

          .v-expansion-panel-header--active {
            color: white !important;
            padding: 0 !important;
          }

          .theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
            border-color: transparent;
          }

          .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
            font-size: 48px;
            color: #1B1B1B;
          }

          .v-expansion-panel--active > .v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon {
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            color: white;
            font-size: 48px;
          }

        }
      }
    }
    #media {
      position: relative;

      .bg {
        background-color: #F9FBFC;
        position: absolute;
        z-index: 1040;
        width: 112%;
        height: 90%;
        transform: rotate(3deg);
        top: 33px;
      }

      .dots {
        background: url(/el/dots-4.svg);
        width: 148px;
        height: 148px;
        position: absolute;
        z-index: 1060;
        top: -50px;
        right: 300px;
      }

      .decor {
        background: url(/el/decor-1.svg);
        width: 146px;
        height: 146px;
        position: absolute;
        z-index: 1060;
        left: 80px;
        bottom: 10px;
      }

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-bottom: 80px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            .slider-btn {
              padding: 5px;
              display: none;
            }

            .action {
              background: url(/icon/slider-oval.svg) 0 0 no-repeat;
              background-size: contain;
            }
          }
        }

        .blocks {
          .slider {
            display: flex;

            a {
              text-decoration: none;
              margin-right: 40px;

              .blk {
                width: 300px;
                min-height: 320px;
                height: 320px;
                background: #FFFFFF;
                box-shadow: 0px 20px 30px #F1F8FB;

                img {
                  height: 200px;
                  width: 100%;
                }

                p {
                  font-family: 'Montserrat', sans-serif !important;
                  font-weight: bold;
                  font-size: 15px !important;
                  line-height: 24px;
                  color: #1B1B1B;
                  padding: 24px;
                }
              }
            }
          }
        }
      }
    }
    #pricing {
      position: relative;
      margin-bottom: 100px;

      .content {
        display: flex;
        z-index: 1050;
        position: relative;
        margin: 0 15% 145px 15%;
        flex-wrap: wrap;

        .title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: bold;
          font-size: 32px !important;
          color: #1B1B1B;
          margin-top: 120px;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .table {
          width: 100%;

          .string {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-bottom: 10px;

            .string-title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 20px !important;
              color: #1B1B1B;
              width: 30%;
            }

            .right {
              display: flex;
              width: 70%;
              justify-content: flex-end;

              .table-btn {
                background: #FFFFFF;
                box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
                border-radius: 32px;
                width: 144px;
                padding: 10px;
                border: 2px solid transparent;
                margin-left: 20px;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 20px !important;
              }

              .action {
                border: 2px solid #29C061;
                color: #29C061;
              }

              .price {
                width: 144px;
                padding: 10px;
                margin-left: 20px;
                text-align: center;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 18px !important;
              }

              .action-price {
                color: #29C061;
              }
            }

            .bold {
              font-weight: bold;
            }

          }

          .border {
            border-bottom: 1px dashed #D2F0EE;
            padding: 10px 0;
          }
        }

        .description {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: normal;
          font-size: 16px !important;
          color: #1B1B1B;
          margin-top: 32px;
        }
      }
    }
    #footer {
      background-color: #252A2F;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("/el/bg-5.svg");
        top: -80px;
        z-index: 1040;
      }

      .dots {
        position: absolute;
        width: 148px;
        height: 148px;
        background: url("/el/dots-1.svg");
        z-index: 1050;
        right: 410px;
        top: -125px;
      }

      .circle {
        position: absolute;
        width: 292px;
        height: 368px;
        background: url(/el/decor-2.svg);
        z-index: 1050;
        right: -30px;
        top: -303px;
      }

      .content {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: bold;
        font-size: 32px !important;
        z-index: 1060;
        color: white;
        margin: 90px 15% 0 15%;
        position: relative;

        .blocks {
          display: flex;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);

          .left {
            padding-top: 40px;
            padding-right: 140px;
            width: 85%;

            p {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 14px !important;
              line-height: 22px;
            }

            .subscribe {
              margin-top: 40px;

              p {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: bold;
                font-size: 16px !important;
              }

              .subscribe-form {
                margin-bottom: 160px;

                .thx {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: solid #1B162C;
                  padding-top: 18px;
                  padding-bottom: 19px;
                  height: 56px;
                  width: 390px;
                  border-radius: 45px;
                  padding-left: 15px;
                  padding-right: 15px;
                  text-align: center;
                  background-color: #FFF;
                  .text {
                    font-family: 'Montserrat', sans-serif !important;
                    font-weight: bold;
                    font-size: 16px !important;
                    color: #9DA5C1;
                  }
                }

                input[type="email"], input[type="submit"] {
                  border-radius: 45px;
                  padding-left: 15px;
                  padding-right: 15px;
                }

                input[type="email"] {
                  background-color: #FFF;
                  border: solid #1B162C;
                  color: #9DA5C1;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  padding-left: 20px;
                  height: 56px;
                  width: 390px;
                  font-size: 16px;
                  font-weight: 600;

                  &:focus, &:hover {
                    outline: none;
                  }
                }

                input[type="email"]::-webkit-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]:-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::-ms-input-placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="email"]::placeholder {
                  font-family: 'Montserrat', sans-serif !important;
                }

                input[type="submit"] {
                  color: white;
                  margin-left: -145px;
                  background-color: #29C061;
                  box-shadow: 0 6px 20px rgba(41, 192, 97, 0.25);
                  border-radius: 32px;
                  font-size: 16px;
                  font-weight: normal;
                  padding: 5px 25px;
                  cursor: pointer;

                  &:focus, &:hover {
                    outline: none;
                  }
                }
              }
            }
          }

          .right {
            width: 15%;

            .title {
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-align: right;
              margin-bottom: 48px;
            }

            .links {
              display: flex;
              flex-wrap: wrap;

              .link {
                font-family: 'Montserrat', sans-serif !important;
                font-weight: normal;
                font-size: 16px !important;
                color: white;
                text-decoration: none;
                width: 100%;
                text-align: end;
                margin-bottom: 40px;

                &:hover {
                  text-decoration: none;
                }
              }
            }
          }
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;

          .copy {
            font-family: 'Montserrat', sans-serif !important;
            font-weight: bold;
            font-size: 16px !important;
          }

          .email {
            a {
              color: #86BDFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: bold;
              font-size: 16px !important;
              text-decoration: none;
            }
          }

          .privacy {
            a {
              color: #FFFFFF;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: normal;
              font-size: 16px !important;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

</style>
