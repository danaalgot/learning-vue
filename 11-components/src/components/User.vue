<template>
    <button @click="onClickAge">Add to the age</button>
    <button @click="ageChangeFn(3)">Add to the age CB</button>
    <p>The user is {{ age }} years old</p>
    <p>Double the age is {{ ageDoubled }}</p>
</template>

<script>
    export default {
        name: "User",
        props: {
            age: {
                type: Number,
                validator(value) {
                    return value < 130
                }
            },
            ageChangeFn: Function
        },
        emits: ["age-change"],
        methods: {
            onClickAge(){
                // Emits the event to the parent object
                this.$emit('age-change', 3)
            }
        },
        computed: {
            ageDoubled() {
                return this.age * 2
            }
        }
    }
</script>

<style scoped lang="scss">
    button{
        margin-right: 1rem;
        border: none;
        background: lavender;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 1rem;
        transition: 0.4s;
        cursor: pointer;

        &:hover{
            background: desaturate(darken(lavender, 40%), 40%);
            color: white;
        }
    }
</style>