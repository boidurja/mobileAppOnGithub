<template>
    <v-container>
        <div class="text-xs-center headline">
            Reports
        </div>

        <v-layout 
            class="mt-3 test-box-style pl-2 pr-3 py-3 mb-2" 
            align-end
            v-for="tests in testsData"
            :key="tests.serialNumber"
        >
            <v-flex xs6>
                <strong>{{ tests.serialNumber }}. {{ tests.testName }} </strong> <br />
                Points: {{ tests.points }}
            </v-flex>
            <v-flex 
                xs6 
                class="text-xs-right my-auto"
            >
                <v-icon class="icon-style icon-color-blue">get_app</v-icon>
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
                    serialNumber: 1,
                    testName: 'Test Name',
                    points: '70/100'
                },
                {
                    serialNumber: 2,
                    testName: 'Test Name',
                    points: '80/100'
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

.icon-color-blue {
    background: blue;
    color: white!important;
}
</style>
