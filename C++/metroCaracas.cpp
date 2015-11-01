#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;

typedef struct Estacion estacion;

struct Estacion{
	int id;
	string nombre;
	*estacion conexiones[10]; //arreglo de apuntadores
	int cantidad_estaciones=0;
};
