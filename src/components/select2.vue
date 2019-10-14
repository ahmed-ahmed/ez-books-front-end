<template>
    <select class="form-control" style="width: 300px">
    </select>
</template>

<script>
    import JQuery from 'jquery'

    require('select2');
    let $ = JQuery;

    export default {
        name: "select2",
        props: ['data', 'value'],
        watch: {
            data: function (newVal) { // watch it
                let select = $(this.$el);
                select.select2({
                    data: newVal
                });
            },
            // val: function (newVal) {
            //     let select = $(this.$el);
            //     select.val(newVal);
            //
            // }
        },
        //{
        //data: [],
        // name: ``,
        // options: {
        //     Object
        // },
        // value: null,
        // multiple: {
        //     Boolean,
        //     default: false
        //
        // }
        //},
        data() {
            return {
                select2data: []
            }
        },
        mounted() {
            const vm = this;
            // this.formatOptions()
            // let vm = this
            let select = $(this.$el);
            // select.select2({
            //     // data: [`hi`, `mu`]
            // });
            select.select2({
                data: this.data
            }).on('change', function () {
                vm.$emit('input', select.val())
            });
            select.val(this.value).trigger('change')

            // select.on('select2:select', function (e) {
            //     console.log(e);
            //     this.value = e.params.data.id;
            // });

            // select
            //     .select2({
            //         placeholder: 'Select',
            //         theme: 'bootstrap',
            //         width: '100%',
            //         allowClear: true,
            //         data: this.select2data
            //     })
            //     .on('change', function () {
            //         vm.$emit('input', select.val())
            //     })
            // select.val(this.value).trigger('change')
        },
        methods: {
            // formatOptions() {
            //     this.select2data.push({id: '', text: 'Select'})
            //     for (let key in this.options) {
            //         this.select2data.push({id: key, text: this.options[key]})
            //     }
            // }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        }
    }
</script>

<style scoped>

</style>
