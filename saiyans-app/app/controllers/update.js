import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        update(event) {
            event.preventDefault();
            var body = {
                name: this.get('name'),
                description: this.get('description'),
            };
            var str = window.location.href;
            var arr = str.split("/");
            var id = arr[arr.length - 1];

            fetch('https://fast-thicket-14832.herokuapp.com/skills/' + id, {
                method: 'PATCH',
                body: JSON.stringify(body),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(response => response)
                .catch(console.error);
            event.target.reset();
        },

        delete(event) {
            event.preventDefault();
            var str = window.location.href;
            var arr = str.split("/");
            var id = arr[arr.length - 1];
            fetch(`https://fast-thicket-14832.herokuapp.com/skills/` + id, {
                method: "DELETE"
            })
                .then(response => response)
                .catch(console.error);
        },
    },
});
