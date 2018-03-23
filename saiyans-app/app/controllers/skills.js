import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addSkill(event) {
            event.preventDefault();
            var body = {
                name: this.get('name'),
                description: this.get('description'),
            }
            fetch("https://fast-thicket-14832.herokuapp.com/skills/", {
                method: 'POST',
                body: JSON.stringify(body),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(res => {
                    return res;
                })
                .catch(console.error);
            event.target.reset();
            setTimeout(location.reload.bind(location), 2000);
        },
    },
});
