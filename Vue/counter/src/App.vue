<script>
    import { saveData, loadData } from './storage';

    export default {
        data() {
            return {
                count: parseInt(loadData('count')) || 0,
                bonusClick: parseInt(loadData('bonusClick')) || 1,
                bonusClickPrice: loadData('bonusClickPrice') || 20
            };
        },
        methods: {
            increase() {
                this.count += this.bonusClick;

                saveData('count', this.count);
            },
            decrease() {
                this.count -= this.bonusClick;

                saveData('count', this.count);
            },
            buyBonusClick() {
                if (this.count < this.bonusClickPrice) {
                    alert('Not enough count');
                    return;
                }

                this.count -= this.bonusClickPrice;

                this.bonusClickPrice *= 2;

                this.bonusClick++;
                saveData('bonusClickPrice', this.bonusClickPrice);
                saveData('count', this.count);
                saveData('bonusClick', this.bonusClick);
            }
        }
    }
</script>

<template>
    <div class="container">
        <p id="counter">Count: {{ count }}</p>
        <div class="buttons">
            <button class="button success" @click="increase">Increase</button>
            <button class="button danger" @click="decrease">Decrease</button>
        </div>
        <div class="shop">
            <button class="button" @click="buyBonusClick">Buy More Clicks - {{ bonusClickPrice }}$</button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 18px;
        height: 90vh;
    }

    #counter {
        font-size: 42px;
    }

    .buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .button {
        min-width: 210px;
        padding: 12px 32px;
        outline: none;
        border: none;
        border-radius: 12px;
        font-size: 24px;
        transition: 300ms;

        &.success {
            background-color: rgb(117, 248, 117);
        }

        &.danger {
            background-color: rgb(225, 70, 46);
        }

        &:hover {
            background-color: black;
            color: #FFF;
            cursor: pointer;
        }
    }
</style>
