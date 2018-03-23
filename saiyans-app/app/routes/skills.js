import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return fetch(`https://fast-thicket-14832.herokuapp.com/skills/`)
            .then(response => response.json())
            .catch(console.error);
    },
});
