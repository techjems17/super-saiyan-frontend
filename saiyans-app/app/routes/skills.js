import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return fetch(`https://super-saiyan-api.herokuapp.com/skills/`)
            .then(response => response.json())
            .catch(console.error);
    },
});
