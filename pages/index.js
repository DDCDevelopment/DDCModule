import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import React from 'react';
import './style.css';
import Modal from 'react-awesome-modal';
/*import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'*/
import { Container, Row, Col, Card, CardColumns, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';



const img = 'https://media3.dealerdecoque.fr/themes/ddcV2/img/logo_ddc.svg';


class Index extends React.Component {

  filterSelection(c){                                                       //filter elements
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      this.RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) this.AddClass(x[i], "show");
    }
  }


   AddClass(element, name) {                                                  //Add a class to the element select by the filter
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

   RemoveClass(element, name) {                                             //remove a class of an element
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  state = { open: false };
constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
  state = { open: false };

  render() {
    return (
      //test

      <div>
      <Page>
        <Layout>
        <html>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <body>

            <div class="navbar">
              <button id="btn_setting"><i class="fa fa-cog"></i> Settings</button>
            </div>

            <div class="head">
              <h1 id="titre-page">
                Ajouter des produits à envoyer à notre équipe
              </h1>
              <p class="ssTitre">Vous êtes à quelques pas de la personnalisation</p>
            </div>

            <div id="centre">                                                                               {/*Center of the page*/} 
              <img src="https://img.icons8.com/ios/452/t-shirt--v1.png" alt="" id="img_center"></img>
              <div class="div_btnopenModal">
                <Button type="button" id="btn_openModal" value="Open" onClick={() => this.openModal()}>Open</Button>
              </div>
            </div>

                  <Modal visible={this.state.visible} width="1500" height="600" effect="fadeInUp"
                    onClickAway={() => this.closeModal()} >


                      <DropdownButton id="dropdown-basic-button" title="Filtres">                               {/*Filter div where is putt all the buttons of the filter*/}
                        <ButtonGroup id="div_filtre">
                          <Row>
                            <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>

                          </Row>
                          <Row>
                            <Button id="btn_filtre" onClick={() => this.filterSelection('TeeShirt')}>TShirt</Button>

                          </Row>
                          <Row>
                            <Button id="btn_filtre" onClick={() => this.filterSelection('Cap')}>Cap</Button>

                          </Row>
                          <Row>
                            <Button id="btn_filtre" onClick={() => this.filterSelection('Case')}>Case</Button>
                          </Row>
                        </ButtonGroup>
                      </DropdownButton>

                      <div class="vl"></div>


            <CardColumns id="div_card">                 {/*test d'affichage des cards en grille*/}
                <div class="filterDiv TeeShirt show">
                      <Card style={{ width: '18rem' }}>
                        <Card.Title>Test</Card.Title>
                        <Card.Img variant="top" src="https://cdn.manelli.com/12932-thickbox_default/tee-shirt-de-boulanger-blanc.jpg" class="img_prod"/>
                          <Card.Body>
                            <Card.Title>Tee-Shirt</Card.Title>
                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv Case show">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" class="img_prod" src="https://static.fnac-static.com/multimedia/Images/FR/MDM/01/cf/c1/12701441/1540-1/tsp20201001141902/Coque-en-silicone-pour-iPhone-11-Blanc.jpg" />
                          <Card.Body>
                            <Card.Title>Case</Card.Title>
                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv Case show">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" class="img_prod" src="https://static.fnac-static.com/multimedia/Images/FR/MDM/01/cf/c1/12701441/1540-1/tsp20201001141902/Coque-en-silicone-pour-iPhone-11-Blanc.jpg" />
                          <Card.Body>
                            <Card.Title>Case</Card.Title>
                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv Case show">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" class="img_prod" src="https://static.fnac-static.com/multimedia/Images/FR/MDM/01/cf/c1/12701441/1540-1/tsp20201001141902/Coque-en-silicone-pour-iPhone-11-Blanc.jpg" />
                          <Card.Body>
                            <Card.Title>Case</Card.Title>
                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv TeeShirt show">
                      <Card style={{ width: '18rem' }}>
                        <Card.Title>Test</Card.Title>
                        <Card.Img variant="top" src="https://cdn.manelli.com/12932-thickbox_default/tee-shirt-de-boulanger-blanc.jpg" class="img_prod"/>
                          <Card.Body>
                            <Card.Title>Tee-Shirt</Card.Title>
                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>

                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                <div class="filterDiv Cap show">
                      <Card class="card">
                        <Card.Img variant="top" class="img_prod" src="https://eproshopping.fr/media/ea80320bf237722005de9b8658157d3ca006ec87/produit/e3644b2a1fc9f9f119d8870cb85f217bad2b3f5d-lg.jpg" />
                          <Card.Body>
                            <Card.Title>Cap</Card.Title>

                          </Card.Body>
                      </Card>
                </div>
                
              </CardColumns>

              <a href="javascript:void(0);" onClick={() => this.closeModal()}><button id="btn_close_modal">Close</button></a>  {/*Button close the modal*/}

            </Modal>

            <hr></hr>

            <div>
              <img src="https://media2.dealerdecoque.fr/img/dealer-de-coque-logo-15936736591.jpg" alt="" id="logo_dealer"></img>
              <p>Dealer de Coque <br></br> 2020 - Emilien et Thomas</p>

            </div>
          </body>

        </html>
        </Layout>
      </Page >
      </div>


    );
  }

}



export default Index;
