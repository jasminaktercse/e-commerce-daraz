let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function (event) {
    let searchQuery = event.target.value.toLowerCase();
    console.log(searchQuery)

    let allNamesDOMCollection = document.getElementsByClassName('name')
    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();

        if (currentName.includes(searchQuery)) {
            console.log(currentName)
            allNamesDOMCollection[i].style.display = 'block';
        }
        else {
            allNamesDOMCollection[i].style.display = 'none';
        }

    }
}) 


const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December'],
        datasets: [{
            label: ['In House'],
            data: [65, 59, 80, 81, 56, 55, 40, 55, 66, 77, 22, 3],
            backgroundColor: 'rgb(130, 218, 142)',
            borderWidth: 1
        }, {
            label: ['Seller'],
            data: [65, 59, 80, 81, 56, 55, 40, 55, 66, 77, 22, 3],
            backgroundColor: 'rgb(123, 114, 252)',
            borderWidth: 1
        }, {
            label: ['Commission'],
            data: [65, 59, 80, 81, 56, 55, 40, 55, 66, 77, 22, 3],
            backgroundColor: 'rgb(245, 188, 84)',
            borderWidth: 1
        }],

    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

