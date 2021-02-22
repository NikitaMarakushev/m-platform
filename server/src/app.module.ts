import {Module} from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.5s41x.mongodb.net/music-platform?retryWrites=true&w=majority'),
        FileModule
    ]
})

export class AppModule {}