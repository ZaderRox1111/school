#include <stdio.h>
#include "bar.h"

int foo()
{
	printf("This is foo() source file foo.c\n");
	int bar_ret_val = bar(); 
	int foo_val = 10;
	return bar_ret_val + foo_val;
}