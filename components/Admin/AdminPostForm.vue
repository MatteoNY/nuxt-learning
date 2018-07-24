<template>
    <form @submit.prevent="onSave">
    
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
    
        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
    
        <AppButton type="submit">Save</AppButton>
    
        <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    
    </form>
</template>

<script>
    import AppControlInput from '@/components/UI/AppControlInput'
    import AppButton from '@/components/UI/AppButton'
    
    export default {
        props: {
            post: {
                types: Object,
                required: false
            }
    
        },
        data() {
            return {
                editedPost: this.post
                 ?  { ...this.post } 
                 :  {
                        author: '',
                        title: '',
                        thumnailLink: '',
                        content: ''
                    }
            }
        },
        components: {
            AppControlInput,
            AppButton
        },
        methods: {
            onSave() {
                // save
                console.log('save', this.editedPost)
            },
            onCancel() {
                // navigate back
                this.$router.push('/admin')
            }
        }
    }
</script>
