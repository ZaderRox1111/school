CC=gcc

.c.o: $(CC) -c 

bar.o: bar.c bar.h
baz.o: baz.c baz.h
foo.o: foo.c foo.h
main.o: main.c foo.h bar.h baz.h

clean:
	rm bar.o baz.o foo.o main.o