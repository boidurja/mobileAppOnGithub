<template>
    <v-container>
        <div class="text-xs-center headline">
            Tests
        </div>

        <v-layout 
            class="mt-3 test-box-style pl-2 pr-3 pt-3 pb-3 mb-2" 
            align-end
            v-for="tests in testsData"
            :key="tests.serialNumber"
        >
            <v-flex xs1 class="mr-2">
                <v-icon class="icon-style mb-1">{{ tests.icon }}</v-icon>
            </v-flex>
            <v-flex xs5>
                <strong>{{ tests.serialNumber }}. {{ tests.testName }} {{ tests.testDate }}</strong> <br />
                Status: {{ tests.status }}
            </v-flex>
            <v-flex 
                xs6 
                class="text-xs-right"
                v-if="tests.score"
            >
                Score: {{ tests.score }}
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
export default {
    data () {
        return {
            testsData: [
                {
                    icon: 'done',
                    serialNumber: 1,
                    testName: 'Test1',
                    testDate: '01/01/2019',
                    status: 'Completed',
                    score: '70%'
                },
                {
                    icon: 'help_outline',
                    serialNumber: 2,
                    testName: 'Test2',
                    testDate: '01/02/2019',
                    status: 'Not taken',
                    score: ''
                }
            ]
        }
    }
}
</script>

<style>

.test-box-style {
    background: lightgrey;
    border-left: 5px solid darkgrey;
    min-height: 80px;
}

.icon-style {
    border-radius: 50%;
    background: green;
    color: white!important;
}
</style>
