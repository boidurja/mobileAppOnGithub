<template>
    <v-container>
        <div class="text-xs-center">
            Top Rankers
        </div>
        <v-container fluid grid-list-md class="background-color">
            <div v-for="tr in myLeagueStandingsTopRankers" :key="tr.rank">
                <v-layout
                    align-center 
                    justify-space-between
                    class="top-border py-2 grey-on-hover"
                >
                    <div>
                        {{ tr.rank }}
                        <v-icon>person</v-icon>
                        <span>
                            {{ tr.userName }}
                        </span>
                    </div>
                    <div >
                        {{ tr.score}} <br />
                        Score
                    </div>
                </v-layout>
            </div>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            myLeagueStandingsTopRankers: [
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
                },
                { 
                    rank: 4,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 5,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 6,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 7,
                    userName: 'User Name',
                    score: 900 
                },
                { 
                    rank: 8,
                    userName: 'User Name',
                    score: 900 
                }
            ]
        }
    }
}
</script>


<style>

.background-color {
    background: rgb(239,239,239);
}

.grey-on-hover:hover {
    background: rgb(204,217,232);
}

</style>
