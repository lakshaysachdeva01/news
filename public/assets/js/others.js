const tabsContainer = document.querySelector('.tabs');
const tabContent = document.querySelector('.tab-content');

tabsData.forEach(tab => {
    const tabElement = document.createElement('div');
    tabElement.classList.add('tab');
    tabElement.dataset.id = tab.id;
    tabElement.addEventListener('click', () => showTabContent(tab));

    const tabTitle = document.createElement('div');
    tabTitle.classList.add('tab-title');
    tabTitle.textContent = tab.title.toLowerCase();

    const tabCircleContainer = document.createElement('div');
    tabCircleContainer.classList.add('tab-circle');

    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.style.backgroundColor = tab.bg;

    tabElement.appendChild(tabTitle);
    tabElement.appendChild(circleElement);
    tabCircleContainer.appendChild(tabElement);

    tabsContainer.appendChild(tabCircleContainer);
});

function showTabContent(selectedTab) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the selected tab
    const tabElement = tabsContainer.querySelector(`[data-id="${selectedTab.id}"]`);
    tabElement.classList.add('active');

    // Display tab content
    tabContent.innerHTML = '';

    const tabContentElement = document.createElement('div');
    tabContentElement.classList.add('tab-content');

    if (selectedTab.title === "All") {
        tabsData.forEach(tab => {
            if (tab.colors) {
                tab.colors.forEach(color => {
                    const shadeItem = createShadeItem(color.color, color.ShadeCode);
                    tabContentElement.appendChild(shadeItem);
                });
            }
        });
    } else if (selectedTab.colors) {
        selectedTab.colors.forEach(color => {
            const shadeItem = createShadeItem(color.color, color.ShadeCode);
            tabContentElement.appendChild(shadeItem);
        });
    }

    tabContent.appendChild(tabContentElement);
}

function createShadeItem(color, shadeName) {
    const shadeItemWrapper = document.createElement('div');
    shadeItemWrapper.classList.add('shade-item-wrapper');

    const shadeItem = document.createElement('div');
    shadeItem.style.backgroundColor = color;
    shadeItem.style.borderTopRightRadius = "40px";
    shadeItem.classList.add('shade-item');

    const shadeNameDiv = document.createElement('div');
    shadeNameDiv.textContent = shadeName;
    shadeNameDiv.classList.add('shade-name');

    shadeItemWrapper.appendChild(shadeItem);
    shadeItemWrapper.appendChild(shadeNameDiv);

    return shadeItemWrapper;
}

if (tabsData.length > 0) {
    showTabContent(tabsData[0]);
}







