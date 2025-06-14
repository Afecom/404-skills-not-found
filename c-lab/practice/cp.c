// Copies files from the source specified by the user to the destination also specified by the user;

// Header Files;
#include <stdio.h>
#include <stdint.h>

int main(int argc, char *argv[])
{
    // Open the source and destination file to be copied from and write into;
    FILE *src = fopen(argv[1], "rb");
    FILE *dst = fopen(argv[2], "wb");

    // Check if the files are opened successfully;
    if (src == NULL || dst == NULL)
    {
        printf("The files could not be opened\n");
        return 1;
    }

    // Initialize a 1 byte integer in the memory so as to use it as a temporary buffer;
    uint8_t b;

    // Loop through every byte reading from the input file and buffering it to be written until done;
    while (fread(&b, sizeof(b), 1, src) != 0)
    {
        fwrite(&b, sizeof(b), 1, dst);
    }

    // Close the opened files;
    fclose(src);
    fclose(dst);
}
