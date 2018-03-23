import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return fetch(`https://super-saiyan-api.herokuapp.com/skills/${params.skill_id}`)
            .then(response => response.json())
            .catch(console.error);
    },
});
