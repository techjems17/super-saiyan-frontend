import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return fetch(`https://fast-thicket-14832.herokuapp.com/skills/${params.skill_id}`)
            .then(response => response.json())
            .catch(console.error);
    },
});
