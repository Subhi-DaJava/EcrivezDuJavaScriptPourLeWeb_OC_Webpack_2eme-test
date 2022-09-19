import retrieveContent from './query.js';

async function showContent() {
  try {
    const content = await retrieveContent();

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);

    let name = document.createElement('div');
    let p = document.createElement('p');
    name.appendChild(p);
    p.textContent = 'Created by Subhi-NodeJs, le 18/09/2022';
    document.querySelector('div').appendChild(name);

  } catch (e) {
    console.log('Error', e);
  }
  
}

showContent();
