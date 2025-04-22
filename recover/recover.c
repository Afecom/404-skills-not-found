#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

const uint8_t BYTE1 = 0xff;
const uint8_t BYTE2 = 0xd8;
const uint8_t BYTE3 = 0xff;
const uint8_t CHECKER = 0xf0;
const uint8_t BYTE4 = 0xe0;

int main(int argc, char *argv[])
{
    // Check if only 2 arguments are passed;
    if (argc != 2)
    {
        printf("The usage for this program is ./recover card.raw\n");
        return 1;
    }

    // Open the forensic image of the memory card;
    FILE *input = fopen(argv[1], "r");
    if (input == NULL)
    {
        printf("Couldn't open the raw file\n");
        return 2;
    }
    // Buffer to store the 512 chunks of 1 byte each;
    uint8_t buffer[512];
    // counter for the file name;
    int counter = 0;
    // Initialize the output file to Null
    FILE *output = NULL;
    // an array for the filename characters;
    char filename[8];

    // Loop through the memory card reading data from the input file until done(completed writing);
    while (1)
    {
        size_t bytesread = fread(buffer, 1, 512, input);

        if (bytesread == 512)
        {
            // Check for the beginning of a JPEG image using it's signature bytes;
            if (buffer[0] == BYTE1 && buffer[1] == BYTE2 && buffer[2] == BYTE3 &&
                (buffer[3] & CHECKER) == BYTE4)
            {
                if (output != NULL)
                {
                    fclose(output);
                }

                // open the output file with the correct name and increament the counter for the
                // next filename;
                sprintf(filename, "%03i.jpg", counter);
                output = fopen(filename, "w");
                counter++;

                if (output == NULL)
                {
                    printf("Could not create or open the output file\n");
                    fclose(input);
                    return 3;
                }

                if (fwrite(buffer, 1, 512, output) != 512)
                {
                    printf("Couldn't write the bytes to the output file!\n");
                    fclose(input);
                    fclose(output);
                    return 4;
                }
            }
            // write the buffered bytes to the output file if the file is still open;
            else if (output != NULL)
            {
                if (fwrite(buffer, 1, 512, output) != 512)
                {
                    printf("Couldn't write the bytes to the output file\n");
                    fclose(input);
                    fclose(output);
                    return 5;
                }
            }
        }
        else if (ferror(input))
        {
            printf("There is some kind of error on the input file\n");
            fclose(input);
            fclose(output);
            return 6;
        }
        else if (feof(input))
        {
            printf("End-Of-File\n");
            break;
        }
    }

    if (output != NULL)
    {
        if (fclose(output) != 0)
        {
            printf("There was an error closing the output file\n");
            return 7;
        }
    }

    if (fclose(input) != 0)
    {
        printf("There was an error closing the input file\n");
        return 8;
    }
}
