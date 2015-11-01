#include <stdio.h>
//definiendo un tipo de dato
typedef struct Nodo Nodo;

struct Nodo
{
	/* data */
	int id;
	int valor;
	Nodo *siguiente;
	Nodo *anterior;

};
//AQUI VAN LAS FUNCIONES, PERMISO
//'Nodo *lista' voy a dar la posicion de memoeria del primer nodo
void agregar(Nodo *nuevo, Nodo **lista){//como se guarda necesito saber su direccion de memoria para que cuando haga la asignación empiece desde ese lugar

	Nodo *actual = *lista;//creo un apuntador que va a recibir un apuntador
	if(actual == NULL){//si la lista esta vacia coloco el primer nodo
		
		*lista = nuevo; // el apuntador lista va a apuntar a la direccion de memoria
		printf("primera----%d\n",(*lista)->id );//coloco los parentesis para decir *lista apunta a nodo nuevo que a su vez es nodo A entonces los parentesis me anulan el puntero y es como decir ponte en la direccion de nuevo y dame sus propiedades
		printf("LA LISTA ESTA VACIA\n");
		return;

	}
	printf("hola mundo");
	printf("-segunda--%d\n",(*lista)->id );
	while(actual->siguiente != NULL){
		printf("recorri el %d\n",actual->id);
		actual = actual->siguiente;
	}
	actual->siguiente = nuevo; //actual->siguiente espera una direccion de memoria USAR &
	//actual->siguiente->siguiente=NULL;
	printf("LA LISTA TENIA ALGO\n");
	
}
void imprimir(Nodo *lista){//paso solo el apuntado de memoria
	Nodo *actual = lista;
	printf("%d\n", actual->id );
	printf("%d\n", actual->valor );
	while(actual!= NULL){
		printf("%d\n",actual->id);
		actual = actual->siguiente;
	}
} 
void eliminarPorUltimo(Nodo **lista){
	Nodo *actual = *lista;
	if(actual == NULL){
		return;
	}
	if(actual->siguiente == NULL){
		*lista = NULL;
		return;
	}
	while(actual->siguiente->siguiente!=NULL){
		actual = actual->siguiente;
	}
	actual->siguiente = NULL;
}

int main(){
	Nodo *lista=NULL;//crea un apuntador
	Nodo a;
	a.id=1;
	a.valor= 30;
	a.siguiente=NULL;
	agregar(&a, &lista);
	
	Nodo b;
	b.id=2;
	b.valor=20;
	b.siguiente=NULL;
	printf("*---llega%d\n",lista->id );
	agregar(&b,&lista);

	Nodo c;
	c.id=3;
	c.valor=40;
	c.siguiente=NULL;
	agregar(&c,&lista);
	/*int num;
	printf("")
	printf("Coloque un -88 si quiere finalizar\n");
	scanf("%i", num);
	while(num != -88){
		scanf("", num);	

		scanf("%i", num);

	}*/
	imprimir(lista);
	//printf("eliminare el ultimo\n");
	//eliminarPorUltimo(&lista);
	//imprimir(lista);
	return 0;
}

/*
int main(){
	
	Nodo a;
	a.id=1;
	a.valor= 30;
	Nodo b;
	b.id=2;
	b.valor=20;
	a.siguiente = &b;
	b.anterior = &a;
	printf("%d\n",a.id);
	printf("%d\n",a.valor);
	printf("%d\n",a.siguiente->valor);
	printf("%d\n",b.anterior->valor);
	return 0;
}
*/
