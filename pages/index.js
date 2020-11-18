import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import React from 'react';
import './style.css';

const img = 'https://media3.dealerdecoque.fr/themes/ddcV2/img/logo_ddc.svg';

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      //test
      <Page>
        <html>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <body>

            <div class="navbar">
              <button class="btn"><i class="fa fa-refresh"></i> Settings</button>
              <button class="btn"><i class="fa fa-cog"></i> Settings</button>
            </div>

            <div class="head">
              <h1 id="titre-page">
                Ajouter des produits à envoyer à notre équipe
              </h1>
              <p class="ssTitre">Vous êtes à quelques pas de la personnalisation</p>
            </div>

            <div id="centre">
              <img src="https://img.icons8.com/ios/452/t-shirt--v1.png" alt="" id="img_center"></img>
              <div class="center">
              <button class="action-button shadow animate green" type="button">Add products!</button>
              </div>
            </div>

            <hr></hr>

            <div>
              <img src="https://media2.dealerdecoque.fr/img/dealer-de-coque-logo-15936736591.jpg" alt="" id="logo_dealer"></img>
              <p>Dealer de Coque <br></br> 2020 - Emilien et Thomas</p>

            </div>

          </body>
        </html>
      </Page >
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    console.log(idsFromResources)

  };

}

export default Index;
