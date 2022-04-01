CC= 	gcc
CFLAGS=	-I.

main: bar.o baz.o foo.o main.o
	$(CC) -o main bar.o baz.o foo.o main.o $(CFLAGS)

.c.o: 
	$(CC) -c -o $@ $< $(CFLAGS)

bar.o: bar.c bar.h
baz.o: baz.c baz.h
foo.o: foo.c foo.h
main.o: main.c foo.h bar.h baz.h

clean:
	rm -f *.o main
