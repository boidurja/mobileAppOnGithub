<template>
    <v-container>
        <v-tabs grow>
            <v-tab ripple
                active-class="blue-text-button"
                class="black-text-button right-border text-capitalize"
            >
                My League
            </v-tab>
            <v-tab-item>
                <v-card flat>
                    <div class="pt-3">
                        <v-container>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs4>
                                    My Rank
                                </v-flex>
                                <v-flex xs5>
                                    <div class="display-4 blue--text d-inline">
                                        6<sup>th</sup>
                                    </div>
                                </v-flex>
                                <v-flex xs3>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-container 
                            grid-list-md 
                            text-xs-center 
                            class="league-details-height mt-1 white--text"
                        >
                            <v-layout 
                                row 
                                wrap 
                                align-center 
                                justify-center 
                                fill-height
                            >
                                <v-flex xs12>
                                    <strong>LEAGUE DETAILS</strong>
                                </v-flex>
                            </v-layout>
                        </v-container>

                        <p class="my-1 ml-1">My League's Top Rankers</p>
                        <v-container grid-list-md>
                            <div v-for="m in myLeaguesTopRankers" :key="m.rank">
                                <v-layout
                                    align-center 
                                    justify-space-between
                                    class="top-border py-2"
                                >
                                    <div>
                                        {{ m.rank }}
                                        <v-icon>person</v-icon>
                                        <span>
                                            {{ m.userName }}
                                        </span>
                                    </div>
                                    <div>
                                        {{ m.score}} <br />
                                        Score
                                    </div>
                                </v-layout>
                            </div>
                        </v-container>

                        <!--v-bottom-nav absolute color="blue" dark>
                            <v-btn>
                                View all
                            </v-btn>
                        </v-bottom-nav-->
                    </div>
                </v-card>
            </v-tab-item>
            <v-tab ripple 
                active-class="blue-text-button"
                class="black-text-button text-capitalize"
            >
                Top Players
            </v-tab>
            <v-tab-item>
                <v-card flat class="py-3">
                    <v-card-text>
                        <v-tabs
                            v-model="active"
                            color="white"
                            grow
                            slider-color="white"
                            icons-and-text
                        >
                            <v-tab 
                                active-class="blue-text"
                                class="text-capitalize"
                                ripple
                            >
                                Global Ranking
                               <img src="@/assets/global-ranking.gif" class="global-ranking-image mb-2" />
                            </v-tab>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>

                                        <p class="ml-2 mt-3 previous-weeks-toppers">Previous Week's Toppers</p>
                                        <v-container grid-list-md>
                                            <div v-for="p in previousWeeksToppers" :key="p.rank">
                                                <v-layout
                                                    align-center 
                                                    justify-space-between
                                                    class="py-2"
                                                >
                                                    <div>
                                                        {{ p.rank }}.
                                                        <span>
                                                            {{ p.userName }}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {{ p.score}} <br />
                                                    </div>
                                                </v-layout>
                                            </div>
                                        </v-container>
                                        
                                        <p class="my-1 ml-1">Global Top Rankers</p>
                                        <v-container grid-list-md>
                                            <div v-for="g in globalTopRankers" :key="g.rank">
                                                <v-layout
                                                    align-center 
                                                    justify-space-between
                                                    class="top-border py-2"
                                                >
                                                    <div>
                                                        {{ g.rank }}
                                                        <v-icon>person</v-icon>
                                                        <span>
                                                            {{ g.userName }}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {{ g.score}} <br />
                                                        Score
                                                    </div>
                                                </v-layout>
                                            </div>
                                        </v-container>

                                        <!--v-bottom-nav absolute color="blue" dark>
                                            <v-btn>
                                                View all
                                            </v-btn>
                                        </v-bottom-nav-->
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab 
                                ripple 
                                active-class="blue-text"
                                class="text-capitalize"
                            >
                                School Ranking
                                <img src="@/assets/school-ranking.gif" class="global-ranking-image mb-2" />
                            </v-tab>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <p class="ml-2 mt-3 previous-weeks-toppers">Previous Week's Toppers</p>
                                        <v-container grid-list-md>
                                            <div v-for="sp in schoolPreviousWeeksToppers" :key="sp.rank">
                                                <v-layout
                                                    align-center 
                                                    justify-space-between
                                                    class="py-2"
                                                >
                                                    <div>
                                                        {{ sp.rank }}.
                                                        <span>
                                                            {{ sp.userName }}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {{ sp.score}} <br />
                                                    </div>
                                                </v-layout>
                                            </div>
                                        </v-container>
                                        <p class="my-1 ml-1">'School Name here' Top Rankers</p>
                                        <v-container grid-list-md>
                                            <div v-for="s in schoolTopRankers" :key="s.rank">
                                                <v-layout
                                                    align-center 
                                                    justify-space-between
                                                    class="top-border py-2"
                                                >
                                                    <div>
                                                        {{ s.rank }}
                                                        <v-icon>person</v-icon>
                                                        <span>
                                                            {{ s.userName }}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {{ s.score}} <br />
                                                        Score
                                                    </div>
                                                </v-layout>
                                            </div>
                                        </v-container>

                                        <!--v-bottom-nav absolute color="blue" dark>
                                            <v-btn>
                                                View all
                                            </v-btn>
                                        </v-bottom-nav-->
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
        <v-bottom-nav absolute color="blue" dark>
            <v-btn @click="goToDailyPracticeMyLeagueFulllist">
                View all
            </v-btn>
        </v-bottom-nav>
    </v-container>    
</template>

<script>

export default {

    data () {
        return {
            myLeaguesTopRankers: [
                { 
                    rank: 1,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 2,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 3,
                    userName: 'User Name',
                    score: 900 
                }
            ],
            previousWeeksToppers: [
                { 
                    rank: 1,
                    userName: 'User Name',
                    score: 450 
                },
                { 
                    rank: 2,
                    userName: 'User Name',
                    score: 445 
                },
                { 
                    rank: 3,
                    userName: 'User Name',
                    score: 400 
                }
            ],
            globalTopRankers: [
                { 
                    rank: 1,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 2,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 3,
                    userName: 'User Name',
                    score: 900 
                }
            ],
            schoolTopRankers: [
                { 
                    rank: 1,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 2,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 3,
                    userName: 'User Name',
                    score: 900 
                }
            ],
            schoolPreviousWeeksToppers: [
                { 
                    rank: 1,
                    userName: 'User Name',
                    score: 450 
                },
                { 
                    rank: 2,
                    userName: 'User Name',
                    score: 445 
                },
                { 
                    rank: 3,
                    userName: 'User Name',
                    score: 400 
                }
            ]
        }
    },
    methods: {
        goToDailyPracticeMyLeagueFulllist () {
            this.$router.push({ name: 'dailypracticemyleaguefulllist'})
        }
    }
}
</script>



<style>
.blue-text-button {
  background: white!important;
  color: blue!important;
  border-bottom: 2px solid blue;
}

.black-text-button {
  background: white!important;
  color: black!important;
  border-bottom: 1px solid lightgrey!important
}

.right-border {
  border-right: 1px solid lightgrey!important;
}

.top-border {
    border-top: 1px solid lightgrey;
}

.blue-text {
    color: blue;
}

.global-ranking-image {
    height: 49px;
}

.v-card__text {
    padding: 0;
}

.previous-weeks-toppers {
    margin-bottom: 0!important;
}
</style>
