<template>
    <div id="profile">
        <div class="container">
            <div class="ur-profile">

                <img class="profile__icon" 
                     src="../assets/profile-icon.png">
                     
                <p class="profile__text">Nikita Cherepanov</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
}
</script>

<style>
#profile {
    margin: 30px 0;
}

.ur-profile {
    display: flex;
    align-items: center;
}

.profile__icon {
    padding-right: 20px;
}

.profile__text {
    font-size: 18px;
    font-weight: 700;
    color: #34495E;
}
</style>