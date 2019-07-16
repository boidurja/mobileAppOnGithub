<template>
    <v-container>
        <p class="ml-2 mt-3 previous-weeks-toppers">Previous Week's Toppers</p>
        <v-container grid-list-md>
            <div v-for="sp in previousWeeksToppers" :key="sp.rank">
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
            ]
        }
    }
}
</script>
