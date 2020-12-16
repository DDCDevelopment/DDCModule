import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import React from 'react';
import './mystyle.css';
import Modal from 'react-awesome-modal';
import { Container, Row, Col, Card, CardColumns, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import jsondata from './data.JSON';
import App from './fabric';
import Image from 'next/image'



/*var stringified = JSON.stringify(jsondata);
var parsedObj = JSON.parse(stringified);*/      //Import data from data.json, and parse it


var product_array = jsondata.product;           //Stock the data into a var to make it a 2D Array
var filter_textile = jsondata.textile;
var filter_coque = jsondata.coque;
var filter_mugs = jsondata.mug;
var filter_affiche = jsondata.affiche;
var filter_accessoire = jsondata.accessoire;
var filter_airpods = jsondata.airpod;
var filter_ordinateurs = jsondata.ordinateur;

var selected_product = 'Textile';               //Define a default product category to prevent error
var selected_underproduct = product_array[0][1];

var list_cat = ["Product-card", "under_product", "selected_perso"];

const img = 'https://media3.dealerdecoque.fr/themes/ddcV2/img/logo_ddc.svg';


function findProduct(array, tofind) {
    for (let x = 0; array[x]; x++) {            //Find clicked product in the 2D Array
        if (array[x][0] === tofind) {           //And return the position value 
            return (x);
        }
    }
}


class Index extends React.Component {
    state = { open: false };
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    ////////////////////////////////////////////////////////////////////////////// Filter Action /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    filterSelection(c) {                                         //filter elements
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            this.RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) this.AddClass(x[i], "show");
        }
    }

    AddClass(element, name) {                                   //Add a class to the element select by the filter
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    RemoveClass(element, name) {                                //remove a class of an element
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


    takeClass(product) {                                        //apply a css class to product for the fliter
        for (let x = 0; filter_coque[x]; x++) {
            if (product.includes(filter_coque[x])) {            //Check for filter list of the product "Coque"
                return ("filterDiv " + filter_coque[x] + " show");
            }
        }
        for (let x = 0; filter_textile[x]; x++) {
            if (product.includes(filter_textile[x])) {          //Check for filter list of the product "Textile"
                return ("filterDiv " + filter_textile[x] + " show");
            }
        }
        for (let x = 0; filter_mugs[x]; x++) {
            if (product.includes(filter_mugs[x])) {          //Check for filter list of the product "mugs"
                return ("filterDiv " + filter_mugs[x] + " show");
            }
        }
        for (let x = 0; filter_accessoire[x]; x++) {
            if (product.includes(filter_accessoire[x])) {          //Check for filter list of the product "mugs"
                return ("filterDiv " + filter_accessoire[x] + " show");
            }
        }
        for (let x = 0; filter_affiche[x]; x++) {
            if (product.includes(filter_affiche[x])) {          //Check for filter list of the product "mugs"
                return ("filterDiv " + filter_affiche[x] + " show");
            }
        }
        for (let x = 0; filter_airpods[x]; x++) {
            if (product.includes(filter_airpods[x])) {          //Check for filter list of the product "mugs"
                return ("filterDiv " + filter_airpods[x] + " show");
            }
        }
        for (let x = 0; filter_ordinateurs[x]; x++) {
            if (product.includes(filter_ordinateurs[x])) {          //Check for filter list of the product "mugs"
                return ("filterDiv " + filter_ordinateurs[x] + " show");
            }
        }
        return ("filterDiv else show");                         //If the product do not have a filter, return default value.
    }



    DisplayFilter(product) {

        switch (product) {
            case "Textile":
                var filter = [];
                var current_filter = filter_textile;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">
                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;

            case "Coque":
                var filter = [];
                var current_filter = filter_coque;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">

                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;

            case "Mugs":
                var filter = [];
                var current_filter = filter_mugs;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">

                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;

            case "Accessoire":
                var filter = [];
                var current_filter = filter_accessoire;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">

                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;

            case "Affiche":
                var filter = [];
                var current_filter = filter_affiche;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">

                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;

            case "Airpod":
                var filter = [];
                var current_filter = filter_airpods;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">

                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;

            case "ordinateur":
                var filter = [];
                var current_filter = filter_ordinateurs;
                return (
                    <DropdownButton id="dropdown-basic-button" title="Filtres">
                        <ButtonGroup id="div_filtre">

                            {/*Filter All*/}
                            <Row>
                                <Button id="btn_filtre" onClick={() => this.filterSelection('all')}>All</Button>
                            </Row>

                            {/*Call function to create filter from data.JSON depending of selected category.*/}
                            {current_filter.map(active_filter => (
                                <Row>
                                    <Button id="btn_filtre" onClick={() => this.filterSelection(active_filter)}>{active_filter}</Button>
                                </Row>
                            ))}

                        </ButtonGroup>
                    </DropdownButton>
                );
                break;
            default:
                break;
        }
    }

    ////////////////////////////////////////////////////////////////////////////// Category action //////////////////////////////////////////////////////////////////////////////

    HandleOnClick(category, number) {
        if (number == 1) {
            selected_product = category;
            this.ShowCategory(1);               //Call the function to diplay the list of a category
        }
        if (number == 2) {
            selected_underproduct = category;
            this.ShowCategory(2);               //Call the function to display the product personnalisation
        }
        this.closeModal();
        this.openModal();                       //Refresh the Modal (popup)
    }


    DisplayCategory(category) {                         //Function that generate te list of category and product
        if (category == 'Product_list') {
            let product = [];
            for (let x = 0; product_array[x]; x++) { //Generate the product category by displaying each 1st item of product array (ex : product_array[x][0])
                product.push(

                    <Card style={{ width: '18rem' }} onClick={() => this.HandleOnClick(product_array[x][0], 1)}>
                        <Card.Img variant="top" src="/logo-dealer.png" className="img_prod" />
                        <Card.Body>
                            <Card.Title>{product_array[x][0]}</Card.Title>
                            <Card.Text>
                                personnalisable
                                </Card.Text>
                        </Card.Body>
                    </Card>
                );
            }
            return (product);
        }
        else {                                          //Generate the product list of a category (ex : product[2][x])
            let product = [];
            let x = findProduct(product_array, selected_product);
            for (let y = 1; product_array[x][y]; y++) {
                var ext = ".jpg";
                var file = '/' + product_array[x][y] + ext;
                product.push(
                    <Card style={{ width: '18rem' }} className={this.takeClass(product_array[x][y])} onClick={() => this.HandleOnClick(product_array[x][y], 2)}>
                        <Card.Img variant="top" src={file} onError={(e) => { e.target.onerror = null; e.target.src = "/logo-dealer.png" }} className="img_prod" />
                        <Card.Body>                                     {/*UPPER - change the image if image is an error*/}
                            <Card.Title>{product_array[x][y]}</Card.Title>
                            <Card.Text>
                                personnalisable
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                );
                
            }

            return (product);
        }
    }


    ShowCategory(number) {
        if (typeof document !== 'undefined') {
            document.getElementById(list_cat[number - 1]).style.display = "none";   //Hide the previous element of the list_cat array and display the clicked one.
            document.getElementById(list_cat[number]).style.display = "block";      //Eg : Hide textile and display product list of category textile, or display 
        }
    }

    HideCategory(number) {
        if (typeof document !== 'undefined') {
            document.getElementById(list_cat[number]).style.display = "none";           //Hide product list and show the product category list (textile, accessoires ...)
            document.getElementById(list_cat[number - 1]).style.display = "block";
        }
    }


    ////////////////////////////////////////////////////////////////////////////// Modal Action O/C /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    openModal() {
        this.setState({             //Open the popup AND refresh it if you call it again
            visible: true
        });
    }

    closeModal() {
        this.setState({             //Close the popup
            visible: false
        });
    }


    ////////////////////////////////////////////////////////////////////////////// //Mise en page ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    state = { open: false };
    render() {                      //HTML code.
        return (
            <div>
                <Page>
                    <Layout>
                        <html>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <body>

                                <div className="navbar">
                                    <a className="fa fa-cog" href="www.Google.fr"></a>
                                </div>

                                <div className="head">
                                    <h1 id="titre-page">
                                        Ajouter des produits à envoyer à notre équipe
                        </h1>
                                    <p className="ssTitre">Vous êtes à quelques pas de la personnalisation</p>
                                </div>


                                <div id="centre">
                                    <Image src="/fond.png" alt="Logo Dealer" width="300" height="200" />
                                    <div className="center">
                                        <Button variant="primary" type="button" className="btn btn-primary" value="Open" onClick={() => this.openModal()}>Open</Button>
                                        <Modal visible={this.state.visible} width="1500" height="600" effect="fadeInUp"
                                            onClickAway={() => this.closeModal()}>


                                            <div id="Product-card">

                                                <a href="javascript:void(0);" onClick={() => this.closeModal()}><button class="close_modal">Close</button></a>

                                                <CardColumns id="div_card">
                                                    {this.DisplayCategory('Product_list', 1)}
                                                </CardColumns>


                                            </div>


                                            <div id="under_product">

                                                <a href="javascript:void(0);" onClick={() => this.HideCategory(1)}><button class="close_modal">Back</button></a>

                                                {this.DisplayFilter(selected_product)}

                                                <CardColumns id="div_card">
                                                    {this.DisplayCategory(selected_product, 2)}
                                                </CardColumns>
                                            </div>

                                            <div id="selected_perso">

                                                <a href="javascript:void(0);" onClick={() => this.HideCategory(2)}><button class="close_modal">Back</button></a>
                                                <p>i'm here {selected_underproduct}</p>
                                                <App />
                                            </div>



                                        </Modal>
                                    </div>
                                </div>

                                <hr></hr>

                                <div>
                                    <Image src="/logo-dealer.png" alt="Logo Dealer" width="100" height="40" />
                                    <p>Dealer de Coque <br></br> 2020 - Emilien et Thomas</p>
                                </div>
                            </body>

                        </html>
                    </Layout>
                </Page >
            </div>
        );
    }




    handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);      //Ca sert à rien.
        this.setState({ open: false })                                                  //Mais c'est pour le lore.
        console.log(idsFromResources)
    };
}



export default Index;
