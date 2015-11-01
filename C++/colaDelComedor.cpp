#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;

typedef struct Nodo Nodo;

struct Nodo{
	int id;
	string nombre;
	int orden;
	int id_amigo;
	Nodo *anterior;
	Nodo *siguienteColeado;
};

void agregarCola(Nodo *nuevo, Nodo **lista){
	Nodo *actual = *lista;
	
	if(actual == NULL){
		*lista = nuevo;
		return;
	}
	cout << "ID de mi nodo actual" << actual->id << endl;
	cout << "ID de mi nodo nuevo" << nuevo->id_amigo << endl;
	while(actual->anterior != NULL){
	
		if(actual->id == nuevo->id_amigo) break;
		
		actual = actual->anterior;
		cout << "Nombre de mi nodo actual" << actual->nombre << endl;
	}
	cout << "fin del ciclo y el ultimo es" << actual->nombre << endl;
	if(actual->id == nuevo->id_amigo){
		Nodo *coleadoActual = actual;
		if(coleadoActual->siguienteColeado==NULL){
			coleadoActual->siguienteColeado = nuevo;
			return;
		}
		while(coleadoActual->siguienteColeado!=NULL){
			coleadoActual = coleadoActual->siguienteColeado;
		}
			coleadoActual->siguienteColeado = nuevo;
		return;
	}
	
	actual->anterior = nuevo;
	return;
}

bool verificoAmigosEnCola(int id, Nodo *lista){
	Nodo *actual = lista;
	if(actual== NULL){
		return false;
	}
	while(actual!= NULL){
		if(actual->id == id){
			return true;
		}
		actual = actual->anterior;
	}
	return false;

}
void imprimir(Nodo *lista){
	Nodo *actual = lista;
	if(actual == NULL){
		printf("La lista esta vacia\n");
		return;
	}
	while(actual!= NULL){
		//printf("|Nombre%s-id%id|->",actual->nombre,actual->id);
		cout << "|Nombre "<< actual->nombre << " Id"<< actual->id <<"|--";
		Nodo *aux = actual;
		while(aux->siguienteColeado != NULL){
			cout << "	Nombre "<< aux->siguienteColeado->nombre << " Id"<< aux->siguienteColeado->id <<"mi amigo se llama"<< actual->nombre << endl;
			aux = aux->siguienteColeado;
		}
		actual=actual->anterior;
	}
}
int main(){

	int id=0;
	Nodo *lista=NULL;
	while(true){
	
	
	string nombre;
	int id_amigo = -99;
	int salida=-99;

		printf("Que cola tan larga, verdad ... Cual es tu nombre \n");
		//scanf("Nombre:%s", &nombre);
		cin >> nombre;
		//printf(+&nombre+", asi que agrega el id de la persona que quieres buscar en la cola\n");
		cout << "Primero verifica que haya un amigo en la cola " << nombre <<", asi que agrega el id de la persona que quieres buscar en la cola\n";
		scanf("%i",&id_amigo);
		if(verificoAmigosEnCola(id_amigo,lista)){
			printf("Esta en la cola, asi que te vas a colear picaron\n");
			Nodo *coleado= new Nodo;
			coleado->nombre = nombre;
			coleado->id_amigo = id_amigo;
			coleado->id = ++id;//becareful
			coleado->anterior = NULL;
			coleado->siguienteColeado = NULL;
			agregarCola(coleado,&lista);
			imprimir(lista);
		}else{
			printf("paso por aqui\n");
			Nodo *ultimoCola= new Nodo;
			ultimoCola->nombre = nombre;
			ultimoCola->id = ++id; //id++ es asignar y luego sumar y ++id es sumar y luego asignar
			ultimoCola->anterior = NULL;
			ultimoCola->id_amigo = -1;
			ultimoCola->siguienteColeado = NULL;
			agregarCola(ultimoCola,&lista);
			imprimir(lista);
		}
		cout << endl <<"Presione 1 para continuar ó 0 para salir";
		cin >> salida;
		if(!salida){
			break;
		}
	}
	
	return 0;
}
