<template>
    <div class="modal_container">
        <div class="modal" :style="modalColor">{{modalName}}</div>
    </div>
</template>

<script>
export default {
    computed: {
        modalName() {
            return this.$store.state.modalName;
        },
        modalColor() {
            return {
                '--test-color': this.$store.state.modalColor
            }
        }
    }
}
</script>

<style scoped>
/* modal */
    .modal_container {
        position: fixed;
        top: -100%;
        left: 2%;
        transition: .4s;
    }
    .modal_container .modal {
        --test-color: '#fff';
        border-radius: 5px;
        color: #fff;
        font-weight: 30;
        padding: 10px;
        letter-spacing: 3px;
        width: 100px;
        line-height: 30px;
        background: var(--test-color);
    }
</style>