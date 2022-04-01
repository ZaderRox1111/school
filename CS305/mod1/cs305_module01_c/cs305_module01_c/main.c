#include <stdio.h>
#include "foo.h"
#include "bar.h"
#include "baz.h"


int main(int argc, char *argv[])
{
	int ret_foo = foo();
	int ret_bar = bar();
	baz();
	printf("Return value in main from foo: %d\n", ret_foo);
	printf("Return value in main from bar: %d\n", ret_bar);
	return 0;
}