Vue.component('component-one', {
    template: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit expedita, similique repellendus ipsum eos eius ab, quidem consequatur sed deleniti? Dolor, repudiandae tenetur velit eum eligendi eius error veritatis.</div>`,
});
Vue.component('component-two', {
    template: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit expedita, similique repellendus ipsum eos eius ab, quidem consequatur sed deleniti? Dolor, repudiandae tenetur.</div>`,
});
Vue.component('component-three', {
    template: `<div>Lorem ipsum dolor veritatis.</div>`,
});


const childElement = {
    template: `<p>some text in child element</p>`,
    mounted(){
        //console.log('child component', this);
    }
}

Vue.component('some-el',{
    props: ['title', 'counter'],
    components: {
        childElement,
    },
    methods:{
        some(){
            console.log('from child');
        }
    },
    template: `<div>
                <hr>        
                <h2 @click = "some">{{title}}</h2>
                
                <h2 @click = "$emit('parent')">{{title}}</h2>
                <slot>
                    <p>Default</p>
                </slot>
                <button @click = "$emit('increase')">Increase</button>
                <p>{{counter}}</p>
                <p>I'm component!</p>
                <child-element />
            </div>`,
    data(){
        return{
            //innerTitle = 'title',
        };
    },
    mounted(){
        //console.log('child component', this);
    }
});
