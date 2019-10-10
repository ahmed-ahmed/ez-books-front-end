<template>
    <div>
        <div v-for="a in accounts" :key="a.id">
            {{a.name}}
            <span v-if="!hasChildren(a)">{{a.total}}</span>
            <div v-else>
                <balance-sheet-accounts :accounts="a.childAccounts"/>
                Total {{a.name}} --------------------------------{{a.total}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'balance-sheet-accounts',
        props: {
            accounts: {}
        },
        methods: {
            hasChildren: function (account) {
                return account.childAccounts && account.childAccounts.length > 0;
            }
        }
    }
</script>