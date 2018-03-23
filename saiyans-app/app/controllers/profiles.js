import Controller from '@ember/controller';

export default Controller.extend({
    // saiyanData: Ember.computed(() => {
    //     return {
    //         labels: ["Goku", "Vegeta", "Master Roshi", "Piccolo", "Shenron"],
    //         datasets: [{
    //             label: "# of wins",
    //             data: [57, 12, 1, 7, 0],
    //             backgroundColor: "orange"
    //         }, {
    //             label: "# of losses",
    //             data: [15, 10, 0, 9, 0],
    //             backgroundColor: "red"
    //         }],
    //         borderColor: "rgb(248, 185, 13)",
    //         borderWidth: 1
    //     }
    // }),

    actions: {
        toggleForm() {
            this.toggleProperty('isNew');
        },

        setSelection(selected) {
            var chosenTeacher = this.get('model').filter(teacher => {
                return teacher.id == selected;
            });
            this.set('teacherSelected', chosenTeacher[0].teacher);
            this.set('chosenTeacher', chosenTeacher[0].image);
        },

        submit(event) {
            event.preventDefault();
            var body = {
                name: this.get('name'),
                description: this.get('description'),
                dob: this.get('dob'),
                teacher: this.get('teacherSelected'),
                image: this.get('chosenTeacher'),
            }
            fetch("https://fast-thicket-14832.herokuapp.com/profiles/", {
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
        },
    }
});
