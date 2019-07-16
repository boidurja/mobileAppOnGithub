<template>
    <v-container>
        <v-card flat>
            <v-layout align-center justify-space-around row fill-height class="pt-4">
                <v-flex xs4 class="ml-3">
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
        </v-card>
        <p class="ml-2 mt-3 previous-weeks-toppers">Previous Month's Toppers</p>
            <v-container grid-list-md>
                <div v-for="mp in previousMonthsToppers" :key="mp.rank">
                    <v-layout
                        align-center 
                        justify-space-between
                        class="py-2"
                    >
                        <div>
                            {{ mp.rank }}.
                            <span>
                                {{ mp.userName }}
                            </span>
                        </div>
                        <div>
                            {{ mp.score}} <br />
                        </div>
                    </v-layout>
                </div>
            </v-container>

        <p class="my-1 ml-1">Top Rankers</p>
        <v-container grid-list-md>
            <div v-for="t in TopRankers" :key="t.rank">
                <v-layout
                    align-center 
                    justify-space-between
                    class="top-border py-2"
                >
                    <div>
                        {{ t.rank }}
                        <v-icon>person</v-icon>
                        <span>
                            {{ t.userName }}
                        </span>
                    </div>
                    <div>
                        {{ t.score}} <br />
                        Score
                    </div>
                </v-layout>
            </div>
        </v-container>

        <v-bottom-nav absolute color="blue" dark>
            <v-btn>
                View all
            </v-btn>
        </v-bottom-nav>
    </v-container>
</template>


<script>
export default {
    data () {
        return {
            previousMonthsToppers: [
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
            TopRankers: [
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
            ]
        }
    }
}
</script>
