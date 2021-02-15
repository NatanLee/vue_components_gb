Vue.component('some-el',{
    template: `<div>I'm component!</div>`,
    data(){
        return{

        };
    },
    mounted(){
        console.log('child component', this);
    }
});