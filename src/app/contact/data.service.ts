import { Injectable } from '@angular/core'
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'

@Injectable({providedIn: 'root'})
export class DatabaseService {
  constructor(private db: AngularFirestore) {}

  public insertData(data: any): Promise<DocumentReference<unknown>> {
    try {
      return this.db.collection('IGRFormData').add({
        ...data,
        createdDate: new Date().toISOString()
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}