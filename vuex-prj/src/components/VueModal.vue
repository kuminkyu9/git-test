<template>
    <div class="modal-container">
        <div class="modal del-modal" v-if="eventModal == 'del'">삭제완료</div>
        <div class="modal update-modal" v-if="eventModal == 'update'">업데이트</div>
        <div class="modal duplicate-modal" v-if="eventModal == 'duplicate'">중복</div>
        <div class="modal clear-modal" v-if="eventModal == 'clear'">전체삭제</div>
        <div class="modal string-modal" v-if="eventModal == 'string'">문자X</div>
        <div class="modal no-set-modal" v-if="eventModal == 'noSet'">입력해주세요!</div>
        <div class="modal front-zero-modal" v-if="eventModal == 'frontZero'">올바른 숫자를 입력해주세요.</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>