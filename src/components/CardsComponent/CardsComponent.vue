<template>
    <div class="cards-container">
        <div v-for="card in cards" :key="card.id" class="grid-item">
            <div class="card-content">
                <!-- <h2></h2> -->
                <div class="role-name-section">
                    <p class="role-name">
                        {{ card.roleName }}
                    </p>
                    <div class="inactive" v-if="!card.active">
                        INACTIVE
                    </div>
                </div>
                
                <p class="role-type">
                    {{ card.roleType }}
                </p>
                <p class="role-description">
                    {{ card.roleDescription }}
                </p>
                <div class="images">
                    <div class="image"></div>
                    <div class="image"></div>
                    <div class="image"></div>
                    <div class="image"></div>
                </div>
            </div>
            <div class="card-footer">
                <div class="created-date">{{card.createdDate}}</div>    
                <div v-if="card.editable" class="buttons">
                    <div class="edit-button">EDIT</div>    
                    <div class="delete-button">DELETE</div>  
                </div>
                <div v-else>
                    *lock-icon*
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import "./CardsComponent.css"

export default {
    name: 'CardsComponent',
    props: {
        cards: {
            type: Array,
        }
    },
    components: {
    },
    data() {
        return {
        }
    },
}
</script>
  