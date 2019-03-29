<template>
    <div>
        <navbar/>

        <div class="container-fluid">
            <Nuxt />
        </div>
        
       
    </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
    components: {navbar}
}
</script>
